import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';

function Header({ title, onBack }) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.headerIcon}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.hamburger, styles.headerIcon]}>
          <View style={styles.bar} />
          <View style={styles.bar} />
          <View style={styles.bar} />
        </View>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

function HomeScreen({ user, loading, error, onFetch, onOpenProfile }) {
  return (
    <View style={styles.homeContainer}>
      {loading && <ActivityIndicator size="large" color="#2196F3" />}

      {error && <Text style={styles.error}>{error}</Text>}

      {user && !loading && (
        <>
          <TouchableOpacity onPress={onOpenProfile}>
            <Image source={{ uri: user.picture.large }} style={styles.homeImage} />
          </TouchableOpacity>
          <Text style={styles.homeName}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={onFetch}>
        <Text style={styles.buttonText}>RANDOM USER</Text>
      </TouchableOpacity>
    </View>
  );
}

function Section({ icon, title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        {icon} {title}
      </Text>
      {children}
    </View>
  );
}

function ProfileScreen({ user }) {
  const { name, picture, dob, gender, location, email, phone, registered } = user;

  return (
    <ScrollView style={styles.profileContainer} contentContainerStyle={{ paddingBottom: 30 }}>
      <Image source={{ uri: picture.large }} style={styles.profileImage} />
      <Text style={styles.profileName}>
        {name.title} {name.first} {name.last}
      </Text>

      <Section icon="👤" title="About">
        <Text style={styles.detail}>Age: {dob.age}</Text>
        <Text style={styles.detail}>Birthday: {dob.date}</Text>
        <Text style={styles.detail}>Gender: {gender}</Text>
        <Text style={styles.detail}>
          Address: {location.street.number} {location.street.name}, {location.city},{' '}
          {location.state}, {location.country}
        </Text>
      </Section>

      <Section icon="✉️" title="Contact">
        <Text style={styles.detail}>Email: {email}</Text>
        <Text style={styles.detail}>Phone: {phone}</Text>
      </Section>

      <Section icon="•••" title="Other">
        <Text style={styles.detail}>Date registered: {registered.date}</Text>
      </Section>
    </ScrollView>
  );
}

export default function App() {
  const [screen, setScreen] = useState('Home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api');
      const json = await response.json();
      setUser(json.results[0]);
    } catch (e) {
      setError('Failed to load user. Check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.app}>
      {screen === 'Home' ? (
        <>
          <Header title="Home" />
          <HomeScreen
            user={user}
            loading={loading}
            error={error}
            onFetch={fetchUser}
            onOpenProfile={() => setScreen('Profile')}
          />
        </>
      ) : (
        <>
          <Header title="Profile" onBack={() => setScreen('Home')} />
          <ProfileScreen user={user} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#f2f2f2' },

  // Header
  header: {
    height: 90,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerIcon: { marginLeft: 16, marginRight: 24 },
  headerTitle: { fontSize: 16, color: '#222' },
  backArrow: { fontSize: 22, color: '#222' },
  hamburger: { justifyContent: 'center' },
  bar: { width: 18, height: 2, backgroundColor: '#444', marginVertical: 2 },

  // Home
  homeContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  homeImage: { width: 140, height: 140 },
  homeName: { fontSize: 14, fontWeight: 'bold', marginTop: 10, marginBottom: 16 },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 3,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 11 },
  error: { color: 'red', marginBottom: 10, textAlign: 'center', padding: 10 },

  // Profile
  profileContainer: { flex: 1, padding: 20 },
  profileImage: { width: 120, height: 120, alignSelf: 'center', marginTop: 10 },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  section: { marginTop: 14 },
  sectionTitle: {
    fontSize: 13,
    color: '#666',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 4,
    marginBottom: 6,
  },
  detail: { fontSize: 12, color: '#333', marginBottom: 3 },
});