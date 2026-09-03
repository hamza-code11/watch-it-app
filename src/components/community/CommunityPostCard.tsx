import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Modal, Pressable, Share, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { CommunityPost } from '../../types/community.types';
import { getCommunityPostStyles } from './CommunityPostCard.style';

const categoryColors: Record<string, string> = {
  Showcase: '#60A5FA',
  Sale: '#10B981',
  Wanted: '#F59E0B',
  News: '#8B5CF6',
};

export default function CommunityPostCard({ post }: { post: CommunityPost }) {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getCommunityPostStyles(theme);

  const [activeImage, setActiveImage] = useState(0);
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });

  const menuBtnRef = useRef<View>(null);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikesCount((prev) => (liked ? Math.max(prev - 1, 0) : prev + 1));
  };

  const handleShare = async () => {
    const postLink = `https://yourapp.com/community/post/${post.id}`;
    try {
      await Share.share({
        message: `${post.title}\n${postLink}`,
        url: postLink,
      });
    } catch (error) {
      console.log('Share failed:', error);
    }
  };

  const handleMessage = () => {
    setMenuVisible(false);
    // router.push(`/messages/${post.user.id}`);
  };

  const openMenu = () => {
    menuBtnRef.current?.measureInWindow((x, y, width, height) => {
      setMenuPosition({
        top: y + height + 4,
        right: 16,
      });
      setMenuVisible(true);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{post.user.initials}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">
              {post.user.name}
            </Text>
            <Text style={styles.date}>{post.date}</Text>
          </View>
          <View style={[styles.categoryBadge, { borderColor: `${categoryColors[post.category]}40` }]}>
            <Text style={[styles.categoryText, { color: categoryColors[post.category] }]}>
              {post.category}
            </Text>
          </View>

          <TouchableOpacity ref={menuBtnRef} style={styles.menuBtn} onPress={openMenu}>
            <Ionicons name="ellipsis-vertical" size={18} color={theme.textMuted} />
          </TouchableOpacity>
        </View>

        <View style={styles.postContent}>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postText}>{post.content}</Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            source={{ uri: post.images[activeImage] }}
            style={styles.postImage}
            resizeMode="cover"
          />
          {post.images.length > 1 && (
            <>
              <View style={styles.imageCounter}>
                <Text style={styles.imageCounterText}>{activeImage + 1}/{post.images.length}</Text>
              </View>
              <View style={styles.sliderDots}>
                {post.images.map((_, index) => (
                  <View
                    key={index}
                    style={[styles.dot, index === activeImage && styles.activeDot]}
                  />
                ))}
              </View>
            </>
          )}
        </View>

        <View style={styles.hashtagsRow}>
          {post.hashtags.map((tag) => (
            <Text key={tag} style={styles.hashtag}>{tag}</Text>
          ))}
        </View>

        <View style={styles.statsRow}>
          <TouchableOpacity style={styles.statItem} onPress={handleLike}>
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={20}
              color={liked ? '#EF4444' : '#FFFFFF'}
            />
            <Text style={[styles.statText, liked && styles.statTextActive]}>{likesCount}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statItem}
            onPress={() => setCommentsVisible((prev) => !prev)}
          >
            <Ionicons name="chatbubble-outline" size={20} color="#FFFFFF" />
            <Text style={styles.statText}>{post.comments.length}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statItem} onPress={handleShare}>
            <Ionicons name="share-social-outline" size={20} color="#FFFFFF" />
            <Text style={styles.statText}>{post.shares}</Text>
          </TouchableOpacity>
        </View>

        {commentsVisible && (
          <>
            <View style={styles.commentSectionBox}>
              <View style={styles.commentInputRow}>
                <View style={styles.miniAvatar}>
                  <Text style={styles.miniAvatarText}>AM</Text>
                </View>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Write a comment..."
                  placeholderTextColor={theme.textMuted}
                  value={comment}
                  onChangeText={setComment}
                />
                <TouchableOpacity style={styles.sendBtn}>
                  <Ionicons name="send" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.commentsList}>
              {post.comments.map((commentItem) => (
                <View key={commentItem.id} style={styles.commentItem}>
                  <View style={styles.commentAvatar}>
                    <Text style={styles.commentAvatarText}>{commentItem.user.initials}</Text>
                  </View>
                  <View style={styles.commentContent}>
                    <View style={styles.commentHeader}>
                      <Text style={styles.commentName}>{commentItem.user.name}</Text>
                      <Text style={styles.commentDate}>{commentItem.date}</Text>
                    </View>
                    <Text style={styles.commentText}>{commentItem.text}</Text>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}
      </View>

      <Modal visible={menuVisible} transparent animationType="fade" onRequestClose={() => setMenuVisible(false)}>
        <Pressable style={styles.menuOverlay} onPress={() => setMenuVisible(false)}>
          <View
            style={[
              styles.menuDropdown,
              { position: 'absolute', top: menuPosition.top, right: menuPosition.right },
            ]}
          >
            <TouchableOpacity style={styles.menuItem} onPress={handleMessage}>
              <Ionicons name="chatbox-ellipses-outline" size={18} color={theme.textPrimary} />
              <Text style={styles.menuItemText}>Message</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
