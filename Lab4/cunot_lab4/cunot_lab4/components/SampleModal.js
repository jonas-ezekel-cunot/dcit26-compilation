import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Platform,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

const CLOSE_COLOR = '#F44336';

const PARAGRAPHS = [
  'Once upon a time, in a green meadow at the edge of a quiet forest, there lived a hare who was known by every animal for his speed. He could dash across the field in a blink, and he never missed a chance to remind everyone about it.',
  'One sunny morning, the hare saw a tortoise slowly making his way along the path. "You are so slow," the hare laughed. "I wonder if you ever get anywhere at all." The tortoise did not get angry. He simply smiled and said, "I may be slow, but I would be happy to race you."',
  'The hare burst out laughing. He thought it was the funniest thing he had ever heard. But the tortoise was serious, so the animals of the meadow gathered to watch. The fox agreed to be the judge, and the finish line was set at the big oak tree on the far side of the hill.',
  'The fox shouted, "Ready, set, go!" and the hare zoomed out of sight in seconds. The tortoise took his first slow step, then another, and another. He did not look around or stop to rest. He kept his eyes on the road and moved forward one steady step at a time.',
  'Far ahead, the hare stopped and looked back. There was no sign of the tortoise anywhere. "I have so much time," he said with a yawn. "I will take a short nap under this shady tree and still win the race easily." Within moments, he was fast asleep.',
  'Meanwhile, the tortoise kept going. He passed the stream, climbed the hill, and walked right by the sleeping hare without making a sound. The sun moved across the sky and the tortoise grew tired, but he never stopped.',
  'When the hare finally woke up, the shadows had grown long. He stretched, looked down the road, and froze. The tortoise was almost at the finish line, with the whole crowd cheering for him. The hare ran as fast as he could, faster than ever before, but it was too late.',
  'The tortoise crossed the line first, and the meadow erupted in applause. The hare, out of breath and embarrassed, walked over and said, "You won fair and square. I was too proud and too careless." The tortoise smiled kindly and said, "It is all right. We both learned something today."',
  'Moral of the story: slow and steady wins the race. Talent is not enough if you are lazy or overconfident, while patience and hard work can take you very far.',
];

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.safe}>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={{ uri: 'https://picsum.photos/id/237/200/200' }}
            />

            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.scrollContent}
            >
              {PARAGRAPHS.map((paragraph, index) => (
                <Text key={index} style={styles.text}>
                  {paragraph}
                </Text>
              ))}
            </ScrollView>

            <View style={styles.closeWrapper}>
              <Button
                title="CLOSE"
                color={Platform.OS === 'ios' ? '#FFFFFF' : CLOSE_COLOR}
                onPress={onClose}
              />
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 16,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    paddingBottom: 8,
  },
  text: {
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 12,
  },
  closeWrapper: {
    width: 100,
    height: 44,
    justifyContent: 'center',
    backgroundColor: CLOSE_COLOR,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 12,
  },
});