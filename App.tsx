import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "http://172.30.1.31:3000" }} // 👉 Next.js 서버 주소
        style={styles.webview}
        startInLoadingState={true}
        javaScriptEnabled
        domStorageEnabled
        onLoadStart={() => console.log("웹뷰 로딩 시작")}
        onLoadEnd={() => console.log("웹뷰 로딩 완료")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
});
