The solution is to guarantee unique keys.  Here's the corrected code using a unique identifier, or if one doesn't exist, generating one:

```javascript
import {FlatList, Text} from 'react-native';
import uuid from 'react-native-uuid'; // Install: expo install react-native-uuid or yarn add react-native-uuid

const data = [{
  id: uuid.v4(),
  name: 'Item 1'
}, {
  id: uuid.v4(),
  name: 'Item 2'
}, {
  id: uuid.v4(),
  name: 'Item 3'
}];

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item) => item.id} // Unique key using UUID
    />
  );
};

export default App;
```

If you cannot add a unique identifier directly to your data, consider generating one within the `keyExtractor` itself. However, this approach requires stable, unique data within the list's elements, so ensure other changes do not impact this.

Note: This solution leverages the `react-native-uuid` library for generating unique identifiers. You'll need to install it using `expo install react-native-uuid` or `yarn add react-native-uuid`. 