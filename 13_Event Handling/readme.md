# Summary 

1. state adalah data private sebuah component. data ini hanya tersedia untuk component teraebut dan tidak bisa diakses dari component lain.
beberapa hal penting tentang state:
1. data yang bisa dimodifikasi menggunakan setState
2. setiap terjadi modifikasi akan terjadi render ulang
3. bersifat asynchronous
4. dipakai dalam class

2. stateful component adalah memiliki state. component ini dibuat dengan class. kelebihan dari class component adalah memiliki lifecycle. sedangkan stateless compoenent adalah tidak memiliki state hanya prop. umumnya component ini dibuat dengan function karena codenya lebih ringkas.
perbedaan stateless dan statefull:
- stateless tidak tahu tentang aplikasi sedangkan stateful mengerti tentang aplikasi.
- stateless tidak melakukan data fetching sedangkan stateful melakukan data fetching.
- tujuan utamanya stateless adalah visualisasi sedangkan stateful berinteraksi dengan aplikasi.
- stateless dapat digunakan kembali sedangkan stateful tidak dapat digunakan kembali.
- stateless hanya berkomunikasi dengan induk langsungnya sedangkan stateful meneruskan status dan data ke anak-anaknya.



3. Handling Event adalah suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen. event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.
beberapa contoh list event:
1. Clipboard events (Promise terpenuhi)
2. Form Events (onChange, onSubmit)
3. Mouse Events (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError, onLoad)