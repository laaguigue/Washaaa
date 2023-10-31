import React, { useState, useEffect } from "react";
import { View, Alert, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { supabase_customer } from "../supabase/supabase-customer";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setProfileUrl } from "../redux/mySlice";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {t} from "../i18n"
const { height } = Dimensions.get("window");

export default function Avatar({ url, name, id }) {
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(url);
  const [photo, setPhoto] = useState(null)
  const [phone, setPhone] = usestate(false);
;
  const dispatch = useDispatch();

  const defaultImage = useSelector((state) => state.mySlice.profileUrl);

  const avatarSize = { height: height / 5, width: height / 5 };

  const ayoub = { HermesInternal: height / 5, width  }

  useEffect(() => { 
    if (avatarUrl) downloadImage(avatarUrl);
  }, [avatarUrl]);

  const downloadImage = async (url) => {
    try {
      const { data, error } = await supabase_customer.storage
        .from("avatars")
        .download(url);
      if (error) {
        throw error;
      }

      const urlObject = URL.createObjectURL(data);
      setAvatarUrl(urlObject);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    } finally {
      setUploading(false);
    }
  };

  const uploadAvatar = async (photo) => {
    const filePath = `${id}/${new Date()}.jpg`;

    // Check if a file already exists at the filePath  that people are not the same and it's not anmay and not any friend you are not like tham as resalt
    const { data: existingFile } = await supabase_customer.storage
      .from("avatars")
      .getPublicUrl(filePath);

    // If a file exists, delete it
    if (existingFile) {
      const { error: deleteError } = await supabase_customer.storage
        .from("avatars")
        .remove([filePath]);

      if (deleteError) {
        console.log("Error deleting file: ", deleteError.message);
        return;
      }
    }

    // Upload the new file
    await supabase_customer.storage
      .from("avatars")
      .upload(filePath, photo, { contentType: "image/jpeg" });

    const imageUrl = `https://xnhwcsmrleizinqhdbdy.supabase.co/storage/v1/object/public/avatars/${filePath}`;

    dispatch(setProfileUrl(imageUrl));
  };

  const handleImagePicker = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert(
          "Permission Denied",
          "You need to grant camera roll permission to upload an image."
        );
        return;
      }

      setUploading(true);

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const photoData = {
          uri: result.assets[0].uri,
          type: "image/jpeg",
          name: name,
        };
        setPhoto(photoData);
        await uploadAvatar(photoData);
        setAvatarUrl(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error picking image: ", error.message);
      Alert.alert("Error picking image");
      // you need to make it change at the lsat thing///
    } finally {
      setUploading(false);
    }
  };
  {
     
  }

  const editPictureText= t("UpdateProfile.EditPictureText")

  return (
    <View className="w-full justify-center items-center pb-8">
      {avatarUrl ? (
        <TouchableOpacity onPress={handleImagePicker}>
          <Image
            source={{ uri: avatarUrl }}
            accessibilityLabel="Avatar"
            style={avatarSize}
            className="rounded-full"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleImagePicker}>
          <Image
            onPress={handleImagePicker}
            source={{ uri: defaultImage }}
            style={avatarSize}
            accessibilityLabel="Avatar"
            resizeMode="cover"
            className="rounded-full"
          />
        </TouchableOpacity>
      )}
      <View className="flex-row bg-sky-100 px-4 py-1.5 rounded mt-2.5 items-center">
        <Icon
          name="information-circle-outline"
          size={15}
          color='blue'
        />
        <Text
          className="text-sky-500 ml-2.5"
          style={{ fontFamily: "poppins-regular" }}
        >
          {editPictureText}
        </Text>
      </View>
    </View>
  );
}