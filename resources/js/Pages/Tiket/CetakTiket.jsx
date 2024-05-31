import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { margin: 10, padding: 10, flexGrow: 1 },
    title: { fontSize: 24, textAlign: "justify", marginBottom: 10 },
    text: { fontSize: 12, marginBottom: 10, textAlign: "justify" },
    line: { height: 1, backgroundColor: "black", marginBottom: 10 },
    hero: { textAlign: "center", marginBottom: 10, fontSize: 24 },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 10,
    },
    tableRow: { margin: "auto", flexDirection: "row" },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
    },
    tableCell: { margin: "auto", marginTop: 5, padding: 5, fontSize: 12 },
});

const CetakTiket = ({ ticket }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.hero}>{ticket.rutes.nama_rute}</Text>
                <hr style={styles.line} />
                <Text style={styles.hero}>Damai Lautan Nusantara</Text>
                <hr style={styles.line} />
                <Text style={styles.hero}>{ticket.jadwals.tanggal}</Text>
                <hr style={styles.line} />
                <Text style={styles.title}>Detail Tiket</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Code</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>{ticket.code}</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Kapal</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {ticket.kapals.nama_kapal}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Date</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {ticket.jadwals.tanggal}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>ETA</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {ticket.jadwals.tiba}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>ETD</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {ticket.jadwals.keberangkatan}
                            </Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>Penumpang</Text>
                {ticket.passengers.map((p) => (
                    <Text key={p.id} style={styles.text}>
                        {p.category} Rp{p.price}
                    </Text>
                ))}
                <hr style={styles.line} />
                <Text style={styles.title}>Kendaraan</Text>
                {ticket.vehicles.map((p) => (
                    <Text key={p.id} style={styles.text}>
                        {p.type} Rp{p.price}
                    </Text>
                ))}
                <Text>{ticket.transactions.amount}</Text>

                {/* <Text ></Text> */}
            </View>
        </Page>
    </Document>
);

export default CetakTiket;
