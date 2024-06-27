import React from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

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
        width: "50%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        padding: 5,
        fontSize: 12,
        textAlign: "left",
    },
});

const CetakTiket = ({ ticket }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.hero}>{ticket.rutes.nama_rute}</Text>
                <View style={styles.line} />
                <Text style={styles.hero}>Damai Lautan Nusantara</Text>
                <View style={styles.line} />
                <Text style={styles.hero}>{ticket.jadwals.tanggal}</Text>
                <View style={styles.line} />
                <Text style={styles.title}>Detail Tiket</Text>
                <Text style={styles.text}>Kode Booking : {ticket.code}</Text>
                <Text style={styles.text}>Nama Pemesan : {ticket.nama}</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Nama Kapal</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {ticket.kapals.nama_kapal}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                Tanggal Keberangkatan
                            </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {new Date(
                                ticket.jadwals.tanggal
                            ).toLocaleDateString()}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                Estimasi Sandar
                            </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {ticket.jadwals.tiba} WIB
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                Estimasi Keberangkatan
                            </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                {ticket.jadwals.keberangkatan} WIB
                            </Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.text}>Penumpang</Text>
                {ticket.passengers.map((p) => (
                    <Text key={p.id} style={styles.text}>
                        {p.category}{" "}
                        {new Intl.NumberFormat("id", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                        }).format(p.price)}
                    </Text>
                ))}
                <View style={styles.line} />
                <Text style={styles.text}>Kendaraan</Text>
                {ticket.vehicles.map((p) => (
                    <Text key={p.id} style={styles.text}>
                        {p.type}{" "}
                        {new Intl.NumberFormat("id", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                        }).format(p.price)}
                    </Text>
                ))}
                <View style={styles.line} />
                {ticket.transactions.map((t) => (
                    <Text key={t.id}>
                        Total :
                        {new Intl.NumberFormat("id", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                        }).format(t.amount)}
                    </Text>
                ))}
            </View>
        </Page>
    </Document>
);

export default CetakTiket;
