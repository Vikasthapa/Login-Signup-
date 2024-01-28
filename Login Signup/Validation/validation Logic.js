function BuildingAFormExample() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ ...errors,
        name: 'Name is required'
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors,
        name: 'Name is too short'
      });
      return false;
    }

    return true;
  };

  return <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label _text={{
        bold: true
      }}>Name</FormControl.Label>
        <Input placeholder="John" onChangeText={value => setData({ ...formData,
        name: value
      })} />
        <FormControl.HelperText _text={{
        fontSize: 'xs'
      }}>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage _text={{
        fontSize: 'xs'
      }}>
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>;
}

function Example() {
  return <Center flex={1}>
      <BuildingAFormExample />
    </Center>;
}