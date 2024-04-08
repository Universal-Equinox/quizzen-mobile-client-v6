import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
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
  VStack,
  Divider,
  HStack,
  ScrollView,
  Button,
} from "@gluestack-ui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'


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


const NewPostScreen = () => {

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

  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Box
        bgColor="$secondary"
        w="$96"
        paddingVertical="$1"
        marginVertical={5}
        borderRadius={25}
      >
        <Center>
          <FormControl
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
          >
            {/* <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel> */}

            <Textarea
              size="md"
              isFocused={true}
              w="$80"
              style={{ borderWidth: 0 }}
            >
              <TextareaInput placeholder="Sorun nedir?" />
            </Textarea>
            <HStack>
              <Box
                w="$20"
                h="$20"
                borderRadius={15}
                borderColor="$gray100"
                bgColor="$green100"
              >
                <Text>device images here</Text>
              </Box>
              <Box
                w="$20"
                h="$20"
                borderRadius={15}
                borderColor="$gray100"
                bgColor="$green100"
              >
                <Text>device images here</Text>
              </Box>
            </HStack>

            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Divider my="$1" />

          {/* DERS KONU FOTO SEÇİMİ */}
          <Box w="$80">
            <VStack>
              <Select>
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Ders Seçiniz" />
                  {/* <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon> */}
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
                  {/* <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon> */}
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
            </VStack>
          </Box>

          <Button
            variant="outline"
            borderColor="black"
            borderWidth={3}
            onPress={() => {
              // router.back();
            }}
          >
            <FontAwesome5 name="paper-plane" size={25} />
          </Button>
        </Center>
      </Box>
    </View>
  )
}

export default NewPostScreen;