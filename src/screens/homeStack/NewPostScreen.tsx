import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  AlertCircleIcon,
  FormControlErrorText,
  Center,
  Textarea,
  TextareaInput,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Divider,
  HStack,
  VStack,
  ScrollView,
  Image
} from "@gluestack-ui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';


const Dersler = [
  { label: "Backend Development", value: "backend" },
  { label: "Frontend Development", value: "frontend" },
  { label: "Database Management", value: "database" },
];

const Konular = [
  { label: "Backend Development", value: "backend" },
  { label: "Frontend Development", value: "frontend" },
  { label: "Database Management", value: "database" },
];


const NewPostScreen = ({ navigation }) => {

  const { navigate } = useNavigation();


  const [searchTextDers, setSearchTextDers] = useState("");
  const [searchTextKonu, setSearchTextKonu] = useState("");
  const [filteredDersler, setFilteredDersler] = useState([]);
  const [filteredKonular, setFilteredKonular] = useState([]);

  useEffect(() => {
    const filteredDers = Dersler.filter((ders) =>
      new RegExp(searchTextDers, "i").test(ders.label)
    );

    const filteredKonu = Konular.filter((konu) =>
      new RegExp(searchTextKonu, "i").test(konu.label)
    );

    setFilteredDersler(filteredDers);
    setFilteredKonular(filteredKonu);
  }, [searchTextDers, searchTextKonu]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (

        <Pressable>
          <FontAwesome5 name="paper-plane" size={25} color="black" />
        </Pressable>
      )
    })
  }, [])

  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Center>
        <Box
          w="full"
          paddingVertical="$1"
          justifyContent="center"
          alignItems="center"
          marginVertical={5}
          borderRadius={25}
        >
          <ScrollView>


            <VStack space="sm" justifyContent="center" alignItems="center" >
              <Box>

                {/* TEXT */}

                <FormControl
                  size="lg"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                  isRequired={true}
                >
                  <Textarea
                    size="md"
                    isFocused={true}
                    w="$96"
                    style={{ borderWidth: 0 }}
                    h="auto"
                  >
                    <TextareaInput placeholder="Sorun nedir?" />
                  </Textarea>

                  <HStack space="xs">
                    <ScrollView horizontal={true}  >


                      {/* SELECTED IMAGE FROM DEVICE LIBRARY */}
                      <Box
                        borderRadius={15}
                        borderColor="$gray100"
                        bgColor="$green100"
                        margin={4}
                      >

                        {/* REMOVE SELECTED IMAGE BUTTON */}
                        <Pressable onPress={() => { }} style={{
                          position: 'absolute',
                          zIndex: 1,
                          top: 10,
                          right: 10,
                        }} >

                          <Ionicons name="close-sharp" size={24} color="black" />
                        </Pressable>

                        <Image
                          size="2xl"
                          alt="none"
                          borderRadius={5}
                          source={{
                            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                          }}
                        />
                      </Box>

                      <Box
                        borderRadius={15}
                        borderColor="$gray100"
                        bgColor="$green100"
                        margin={4}
                      >

                        {/* REMOVE SELECTED IMAGE BUTTON */}
                        <Pressable onPress={() => { }} style={{
                          position: 'absolute',
                          zIndex: 1,
                          top: 10,
                          right: 10,
                        }} >

                          <Ionicons name="close-sharp" size={24} color="black" />
                        </Pressable>

                        <Image
                          size="2xl"
                          alt="none"
                          borderRadius={5}
                          source={{
                            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                          }}
                        />
                      </Box>


                    </ScrollView>

                  </HStack>

                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 6 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>

              </Box>

              <Divider my="$1" />



              {/* DERS KONU FOTO SEÇİMİ */}
              <Box w="$80" JustifyContent="flex-end">

                <Select>
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Ders Seçiniz" />
                    <FontAwesome5 name="sort-down" />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent minHeight="$96">
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>

                      <TextInput
                        onChangeText={setSearchTextDers}
                        value={searchTextDers}
                        placeholder="ara"
                        style={{
                          height: 40,
                          margin: 12,
                          width: 300,
                          padding: 2,
                          borderBottomColor: "gray",
                          borderBottomWidth: 1,
                        }}
                      />

                      <Divider my="$1" />

                      {filteredDersler.map((ders) => (
                        <SelectItem
                          key={ders.value}
                          label={ders.label}
                          value={ders.value}
                        />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>

                <Select isDisabled={false}>
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Ders Seçiniz" />

                    <FontAwesome5 name="sort-down" />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent minHeight="$96">
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>

                      <TextInput
                        onChangeText={setSearchTextKonu}
                        value={searchTextKonu}
                        placeholder="ara"
                        style={{
                          height: 40,
                          margin: 12,
                          width: 300,
                          padding: 2,
                          borderBottomColor: "gray",
                          borderBottomWidth: 1,
                        }}
                      />

                      <Divider my="$1" />

                      {filteredKonular.map((konu) => (
                        <SelectItem
                          key={konu.value}
                          label={konu.label}
                          value={konu.value}
                        />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>

                <Divider my="$1" />

                <Box>
                  <HStack space="md">
                    <Pressable
                      onPress={() => {
                        navigate("camera")
                      }}
                    >
                      <Box
                        w="$20"
                        h="$20"
                        bg="$blue100"
                        borderRadius={15}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <FontAwesome5 name="camera" size={45} color={"gray"} />
                      </Box>
                    </Pressable>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <Pressable>
                        <Box
                          w="$20"
                          h="$20"
                          borderRadius={15}
                          borderColor="$gray100"
                          bgColor="$green100"
                        >
                          <Text>device images here</Text>
                        </Box>
                      </Pressable>
                    </ScrollView>
                  </HStack>
                </Box>
              </Box>


            </VStack>
          </ScrollView>


        </Box>
      </Center>
    </View >
  )
}

export default NewPostScreen;