import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { initialCreatePostFormData, postCategories } from '../../../data/community';
import { getStyles } from '../../../screens/createPost/createPost.style';
import { CreatePostFormData } from '../../../types/community.types';

const MAX_TAGS = 10;

export default function CreatePost() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [formData, setFormData] = useState<CreatePostFormData>(initialCreatePostFormData);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const handleChange = (field: keyof CreatePostFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  const addTag = (rawTag: string) => {
    const cleaned = rawTag.trim().replace(/^#+/, '');
    if (!cleaned) return;

    setTags((prev) => {
      if (prev.length >= MAX_TAGS) return prev;
      const alreadyExists = prev.some((t) => t.toLowerCase() === cleaned.toLowerCase());
      return alreadyExists ? prev : [...prev, cleaned];
    });
  };

  const handleTagChange = (text: string) => {
    const endsWithSeparator = /[\s,]$/.test(text);

    if (endsWithSeparator) {
      const parts = text.split(/[\s,]+/).filter((part) => part.trim().length > 0);
      parts.forEach(addTag);
      setTagInput('');
      return;
    }

    const parts = text.split(/[\s,]+/).filter((part) => part.trim().length > 0);
    if (parts.length > 1) {
      parts.slice(0, -1).forEach(addTag);
      setTagInput(parts[parts.length - 1]);
    } else {
      setTagInput(text);
    }
  };

  const handleSubmitEditing = () => {
    if (tagInput.trim()) {
      addTag(tagInput);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleSubmit = () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      Alert.alert('Missing information', 'Please fill in all required fields.');
      return;
    }

    if (!formData.category) {
      Alert.alert('Missing information', 'Please select a category.');
      return;
    }

    const finalData = {
      ...formData,
      hashtags: tags.join(', '),
    };

    console.log('Post Data:', finalData);
    Alert.alert('Success', 'Post created successfully!');
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Post</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Create New Post</Text>

          <View style={styles.categorySection}>
            <Text style={styles.categoryLabel}>Category *</Text>
            <View style={styles.categoryRow}>
              {postCategories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryOption,
                    formData.category === category && styles.categorySelected,
                  ]}
                  onPress={() => handleChange('category', category)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      formData.category === category && styles.categoryTextSelected,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Title *</Text>
            <TextInput
              style={styles.input}
              value={formData.title}
              onChangeText={(value) => handleChange('title', value)}
              placeholder="Post title..."
              placeholderTextColor={theme.textMuted}
              maxLength={100}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Content *</Text>
            <TextInput
              style={styles.textArea}
              value={formData.content}
              onChangeText={(value) => handleChange('content', value)}
              placeholder="What's on your mind?"
              placeholderTextColor={theme.textMuted}
              multiline
              maxLength={2000}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Hashtags {tags.length > 0 ? `(${tags.length}/${MAX_TAGS})` : ''}
            </Text>
            <View style={styles.tagInputContainer}>
              {tags.map((tag) => (
                <View key={tag} style={styles.tagChip}>
                  <Text style={styles.tagChipText}>#{tag}</Text>
                  <TouchableOpacity onPress={() => handleRemoveTag(tag)} style={styles.removeTagBtn}>
                    <Ionicons name="close" size={12} color={theme.accentPrimary} />
                  </TouchableOpacity>
                </View>
              ))}

              {tags.length < MAX_TAGS && (
                <TextInput
                  style={styles.tagInput}
                  value={tagInput}
                  onChangeText={handleTagChange}
                  onSubmitEditing={handleSubmitEditing}
                  placeholder="Type a tag and press space..."
                  placeholderTextColor={theme.textMuted}
                  returnKeyType="done"
                  blurOnSubmit={false}
                />
              )}
            </View>
          </View>

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={() => router.back()}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>

            <View style={styles.postBtnWrapper}>
              <LinearGradient
                colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.postBtn}
              >
                <TouchableOpacity onPress={handleSubmit} style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={styles.postBtnText}>Post</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
