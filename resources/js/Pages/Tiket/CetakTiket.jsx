import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { margin: 10, padding: 10, flexGrow: 1 },
    title: { fontSize: 24, textAlign: "center", marginBottom: 20,  },
    text: { fontSize: 12, marginBottom: 10 },
});

const CetakTiket = ({ ticket }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Detail Tiket</Text>
                <Text style={styles.title}>Code : {ticket.id}</Text>
            </View>
        </Page>
    </Document>
);

export default CetakTiket
