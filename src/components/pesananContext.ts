import React, { VoidFunctionComponent } from "react";

export interface Pesanan {
    id: string,
    nama: string,
    foto: string,
    fotoURL: string,
    harga: number,
    jumlah: number,
    pesan: string
}

const PesananContext = React.createContext<{
    pesanan: Pesanan[];
    addKeranjang: (id: string, nama: string, foto: string, fotoURL: string, harga: number, jumlah: number, pesan: string) => void;
    deleteKeranjang: ([]) => void,
    initContext: () => void;
}>({
    pesanan: [],
    addKeranjang: () => { },
    deleteKeranjang: () => { },
    initContext: () => { }
});

export default PesananContext;