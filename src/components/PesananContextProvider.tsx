import React, { useCallback, useEffect, useState } from "react";
import { Directory, Filesystem } from "@capacitor/filesystem";
import PesananContext, { Pesanan } from "./pesananContext";
import { Storage } from '@capacitor/storage'

const PesananContextProvider: React.FC = props => {
    const [pesanan, setPesanan] = useState<Pesanan[]>([

    ]);

    useEffect(() => {
        const storablePesanan = pesanan.map(pesanan => {
            return {
                id: pesanan.id,
                nama: pesanan.nama,
                foto: pesanan.foto,
                fotoURL: pesanan.fotoURL,
                harga: pesanan.harga,
                jumlah: pesanan.jumlah,
                pesan: pesanan.pesan
            }
        });
        Storage.set({ key: 'pesanan', value: JSON.stringify(storablePesanan) });
    }, [pesanan]);

    const initContext = useCallback(async () => {
        const dataPesanan = await Storage.get({ key: 'pesanan' });
        const storedPesanan = dataPesanan.value ? JSON.parse(dataPesanan.value) : [];
        const loadedMemories: Pesanan[] = [];
        for (const storedMemory of storedPesanan) {
            loadedMemories.push({
                id: storedMemory.id,
                nama: storedMemory.nama,
                foto: storedMemory.foto,
                fotoURL: storedMemory.fotoURL,
                harga: storedMemory.harga,
                jumlah: storedMemory.jumlah,
                pesan: storedMemory.pesan
            })
        }
        setPesanan(loadedMemories)
    }, []);
    const deleteKeranjang = (psn: string[]) => {
        setPesanan()
    }

    const addKeranjang = (id: string, nama: string, foto: string, fotoURL: string, harga: number, jumlah: number, pesan: string) => {
        const newPesanan: Pesanan = {
            id: id,
            nama: nama,
            foto: foto,
            fotoURL: fotoURL,
            harga: harga,
            jumlah: jumlah,
            pesan: pesan
        }
        setPesanan((currKeranjang: Pesanan[]) => {
            return currKeranjang.concat(newPesanan);
        })
    }


    return (
        <PesananContext.Provider value={{ pesanan, addKeranjang, deleteKeranjang, initContext }}>
            {props.children}
        </PesananContext.Provider>
    )
}

export default PesananContextProvider;
