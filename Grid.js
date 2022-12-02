import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, List, ImageBackgroundBase } from "react-native";
import React, { useState } from "react;"


const imageArray= new Array(11).fill("https://thumbs.dreamstime.com/b/two-cute-golden-retriever-puppies-playing-photo-45116795.jpg");

function renderItem( { item }) {
    return <Image source={{uri : item }} style= {{ height: 100} } />;
}

export default function Griddy() {
    const [images, setImages] = useSet(imageArr);
    return <Flatlist data={images} renderItem={renderItem} />;
}