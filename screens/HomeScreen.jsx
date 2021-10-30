import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { Heart, Search, Settings, ShoppingCart } from "react-native-feather";
import products from "../data/products.json";

const HomeScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHPadding = 40;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Settings
          stroke="black"
          width={28}
          height={28}
          style={{ marginRight: 28 }}
        />
        <View>
          <ShoppingCart stroke="black" width={28} height={28} />
          <View
            style={{
              position: "absolute",
              left: 20,
              top: -10,
              backgroundColor: "#F52A29",
              width: 20,
              height: 20,
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              3
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 28 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "black",
          }}
        >
          Fashion Shop
        </Text>

        <Text style={{ fontSize: 20 }}>Get popular fashion from home</Text>
      </View>

      <View
        style={{
          backgroundColor: "#FFF",
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          marginBottom: 18,
        }}
      >
        <Search stroke="#A3A1A2" width={16} height={16} />
        <Text style={{ color: "#A3A1A2", marginLeft: 16, fontSize: 18 }}>
          Search the clothes you need
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 28,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "black",
          }}
        >
          Popular Fashion
        </Text>
        <Text style={{ fontSize: 18, color: "#F52A29" }}>See All</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ padding: 8 }} />}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          const gap = 8;
          const rightMargin = { marginRight: gap };
          const leftMargin = { marginLeft: gap };

          return (
            <View
              style={[
                {
                  backgroundColor: "white",
                  borderRadius: 16,
                  padding: 16,
                  width: (screenWidth - screenHPadding - 2 * gap) / 2,
                },
                isEven ? rightMargin : leftMargin,
              ]}
            >
              <Image
                style={{
                  width: 120,
                  height: 160,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={{ uri: item.imageUrl }}
              />
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#FFFAFA",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 120,
                  left: 100,
                }}
              >
                <Heart stroke="red" />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 16,
                }}
              >
                {item.name.length < 10
                  ? item.name
                  : `${item.name.slice(0, 10).trim()}...`}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {item.price.hasDiscount && (
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#A3A1A2",
                      textDecorationLine: "line-through",
                      marginRight: 4,
                    }}
                  >
                    {item.price.oldPrice}
                  </Text>
                )}
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.price.currentPrice}
                </Text>
              </View>
            </View>
          );
        }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
