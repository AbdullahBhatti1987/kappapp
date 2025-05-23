import { StyleSheet, Text, View } from 'react-native'

function Heading({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'semibold',
    color: '#1A1A1A',
    letterSpacing: 0.5,
  },
})


export default Heading
