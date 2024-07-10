import React from "react";
import {
    Document,
    Font,
    Image,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";
import logo from "../../../../public/logo.png";

const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12 },
    section: { margin: 10, padding: 10, flexGrow: 1 },
    title: {
        fontSize: 14,
        textAlign: "center",
        marginBottom: 5,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 14,
        textAlign: "left",
        marginBottom: 5,
        fontWeight: "bold",
    },
    text: { fontSize: 10, marginBottom: 2, textAlign: "left" },
    line: { height: 1, backgroundColor: "black", marginBottom: 5 },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 5,
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
        fontSize: 10,
        textAlign: "left",
    },
    logo: { width: 50, height: 50, marginBottom: 5, alignSelf: "center" },
    footer: { textAlign: "center", marginTop: 20, fontSize: 12 },
});

const CetakTiket = ({ ticket, reservedSeats }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Image style={styles.logo} src={logo} />
                <Text style={styles.title}>Tiket Perjalanan</Text>
                <Text style={styles.title}>Damai Lautan Nusantara</Text>
                <View style={styles.line} />
                <Text style={styles.title}>{ticket.rutes.nama_rute}</Text>
                <View style={styles.line} />
                <Text style={styles.text}>Kode Booking : {ticket.code}</Text>
                <Text style={styles.text}>Nama Pemesan : {ticket.nama}</Text>
                {ticket.transactions.map((t) => (
                    <Text style={styles.text} key={t.id}>
                        Status Pembayaran : {t.status}
                    </Text>
                ))}
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

                <Text style={styles.subtitle}>Ranjang</Text>
                {reservedSeats.map((seat) => (
                    <Text key={seat.id} style={styles.text}>
                        {seat.name}
                    </Text>
                ))}
                <View style={styles.line} />
                <Text style={styles.subtitle}>Penumpang</Text>
                {ticket.passengers.map((p) => (
                    <Text key={p.id} style={styles.text}>
                        {p.category} :
                        {new Intl.NumberFormat("id", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                        }).format(p.price)}
                    </Text>
                ))}
                <View style={styles.line} />
                <Text style={styles.subtitle}>Kendaraan</Text>
                {ticket.vehicles.map((p) => (
                    <Text key={p.id} style={styles.text}>
                        {p.type} :
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
                {/* <Text>{reservedSeats.name}</Text> */}
                <View style={styles.line} />
                <Text style={styles.footer}>
                    Terima kasih telah menggunakan layanan kami.
                </Text>
            </View>
        </Page>
    </Document>
);

export default CetakTiket;
