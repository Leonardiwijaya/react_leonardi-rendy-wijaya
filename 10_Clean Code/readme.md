# Summary

1. Poin 1
Clean code adalah istilah untuk code yang mudah dibaca, dipahami dan diubah oleh programmer. tujuan menerapkan clean code adalah code mudah dikelola saat melakukan kolaborasi dengan team selain itu pengembangan fitur menjadi lebih mudah dan cepat karena code mudah dipahami.

2. Poin 2
Karakteristik clean code:
1. Mudah dipahami: penamaan harus sesuai dengan isi atau tujuan dari codenya. 
contohnya:
a = [1,3,5,7]; penamaan tidak sesuai dengan isi
ganjil = [1,3,5,7]: penamaan yang mudah dipahami
2. Mudah dieja dan dicari: penamaan mudah dibaca sehingga memudahkan pencarian. 
contohnya divider jangan di singkat jadi dvdr
3. singkat namun mendeskripsikan konteks: gaya penulisan disingkat sehingga lebih efisien tanpa menghilangkan fungsinya.
4. konsisten: penamaan atau penggunaan suatu fungsi tetap konsisten pada satu style yang sama.
5. hindari penamaan yang tidak perlu: hindari penamaaan yang berlebih jika penamaan sederhana sudah jelas.
6. komentar: untuk memberi keterangan pada suatu code. hindari penggunaan komentar yang tidak perlu pada code yang mudah dipahami.
7. good function: function yang baik hanya bisa mengerjakan satu tugas bukan banyak tugas.
8. gunakan konvensi
9. formatting: mengatur formatting untuk memudahkan dan merapikan code sehingga mudah dipahami dan dikembangkan.

3. Poin 3
Clean code principle:
Kiss (keep it so simple): hindari pembuatan fungsi yang melakukan lebih dari satu tugas. berikut tips kiss:
- fungsi atau class harus kecil
- fungsi yang dibuat hanya melakukan satu tugas saja
- jangan gunakan terlalu banyak argumen pada fungsi
- harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal.

Dry (Don't Repeat Yourself): hindari membuat code yang sama berulang kali, jika bisa code tersebut dapat diatasi dengan menggunakkan fungsi.

Refactoring adalah proses mengubah struktur code menjadi lebih efisien tanpa mengubah perilaku atau hasil dari code tersebut. prinsip kiss dan dry bisa dicapai dengan cara refactor.
