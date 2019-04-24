import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DeckListItem from './DeckListItem';
import { white, purple } from "../utils/colors";

class DeckList extends Component {
  render() {
    let decks = {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }

    return (
      <View>
        <Text>DeckList</Text>

        {decks && Object.keys(decks).map((deck) => {
          return (
            <View key={deck} style={styles.item}>
              <TouchableOpacity>
                <DeckListItem 
                  title={decks[deck].title} 
                  count={decks[deck].questions.length} />
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: 16,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  }
})

export default DeckList