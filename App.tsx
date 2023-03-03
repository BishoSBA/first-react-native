import React from 'react';
// import type {PropsWithChildren} from 'react';
import {SectionList, StyleSheet, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(this: any): JSX.Element {
  // const [Items, setItems] = useState([
  //   {id: '1', item1: `Item ${this.id}-1`, item2: `Item ${this.id}-2`},
  // ]);

  interface SOME_TYPE {
    id: number;
    title: string;
    data: string[];
  }

  const DATA: Array<SOME_TYPE> = [
    {
      id: 1,
      title: `Title ${this.id}`,
      data: [`Item ${this.id}-1`, `Item ${this.id}-2`],
    },
    {
      id: 2,
      title: `Title ${this.id}`,
      data: [`Item ${this.id}-1`, `Item ${this.id}-2`],
    },
    {
      id: 3,
      title: `Title ${this.id}`,
      data: [`Item ${this.id}-1`, `Item ${this.id}-2`],
    },
  ];

  const styles = StyleSheet.create({
    item: {
      color: Colors.black,
      fontSize: 20,
    },
    title: {
      backgroundColor: 'skyblue',
      fontSize: 30,
    },
  });

  return (
    <SectionList
      keyExtractor={(item, index) => item + index}
      sections={DATA}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.title}>{title}</Text>
      )}
    />
  );
}

export default App;
