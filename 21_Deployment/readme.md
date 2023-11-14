Link: https://react-leonardi-rendy-wijaya.vercel.app/

# Summary
1. build adalah proses yang  membangun apliaksi kita menjadi versi production dengan tujuan agar perfoma aplikasi kita menjadi lebih ringan dan cepat. build diperlukan saat deployment karena saat aplikasi kita masih local banyak pesan peringatan-peringatan bawaan dari react uang membuat aplikasi kita menjadi besar dan lambat. oleh karena itu build perlu dilakukan saat melakukan deployment. perintah untuk melakukan build aplikasi react adalah npm run build. setelah aplikasi di build maka kita dapat menjalankan aplikasi yang optimal di lokal komputer kita dengan menggunakan serve. hal yang harus dilakukan pertama adalah menginstall serve dengan perintah npm install serve dan menjalankannya dengan menggunakan perintah serve -s build.

2. deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. dengan tujuan agar aplikasi yang telah kita buat dapat diakses oleh banayak orang bukan secara lokal saja dan sekedar tim atau personal saja. deployment dapat dilakukan dengan layanan pihak ketiga seperti surge dan netlify.

surge adalah layanan penerbit website statik gratis untuk front end developers. website statik yang menggunakan surge akan memiliki subdomain .surge.sh. surge dapat menerima file HTML, CSS, dan JS.

netlify adalah salah satu platform penyedia layanan build tools sekaligus continous deplyoment. netlify memungkinkan kita untuk mempublish website statis secara gratis. netlify juga sudah terintegrasi dengan git host popular seperti github, gitlab dan bitbucket.

3. vercel adalah end to end platform untuk developer dalam membangun dan mendeploy aplikasi website kita dengan mudah. vercel dapat digunakan secara personal maupun team dan vercel memiliki beberapa keunggulan yaitu:
- mudah melakukan deploy untuk pemula
- memiliki fitur untuk memonitoring project kita
- memiliki CI/CD yang akan otomatis mengupdate aplikasi kita ketika ada terjadi perubahan pada repository github yang kita gunakan untuk deployment.
- dapat mengatur custom domain

cara menggunakkan vercel adalah:
1. log in pada
2. hubungkan akun vercel dengan github
3. import project yang telah ada atau buat project baru. 
nb: project harus memiliki file index.html, dimana file index.html tidak boleh didalam folder harus di luar atau folder project.
4. lakukan build dan website akan berhasil di deploy
