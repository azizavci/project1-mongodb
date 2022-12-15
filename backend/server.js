require("dotenv").config();

/**
 * Bu sayfa backend için başlangıç noktası olarak kabul edilebilir.
 * Express kütüphanemizi burada çağırıp işlemlerimizi üzerinden yapacağız.
 */

const express = require("express");
const mongoose = require("mongoose");



/**
 * express app :
 */
const app = express();
const workoutRoutes = require("./routes/workouts");

/**
 * bir sonraki aşamada amacım request leri dinlemek olacak.
 * programı çalıştırmak için : >> node server.js
 * programı durdurmak için   : ctrl + c
 *
 * hot reload özelliği için : >> npm i nodemon
 * daha sonra : >> nodemon server.js
 *
 * ya da >> npm run dev
 * bu komut package.json dosyasındaki dev isimli script i çalıştırır.
 */


// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening port on", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * artık uygulama 4000 numaralı port üzerinden istekleri dinliyor
 * şimdi route handler oluşturma zamanı
 */

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
/**
 * middleware in bir sonraki aşamasına geçmek için bu ara yazılımın sonunda next
 * işlevini çalıştırmamız gerekiyor. next yazılmazsa bir sonraki aşamaya geçmeyecektir
 */

/**
 *  '/' adresine bir istek gerçekleştirdiğimizde önce bizim middlewarimiz çalıştırılacaktır.
 */

/**
 * bu bir get isteğine yanıt verecek.rotalar özelleştirilebilir.
 * '/' rotası localhost (yerel ana bilgisayar) bağlantı noktası 4000'e
 * gidildiğinde etki alanının '/' ile işaretleneceği anlamına gelir.
 */
// app.get("/", (req, res) => {
//   res.json({
//     data: {
//       adi: "aziz",
//       soyadi: "avci",
//       yasi: "28",
//       boyu: "178",
//     },
//   });
// });

/**
 * bir sonraki aşamada ise .env dosyası oluşturuyoruz.
 * bu dosyada önemli değişkenler tutulur ; port numaraları, veritabanı bağlantı
 * dizeleri vb. Bu değişkenler kod kısmında gösterilmediği için güvenlidir.
 *
 * >> npm i dotenv
 * dotenv : ortam değişkenlerini yükleyen bir pakettir.
 */

/**
 * bu aşamada bir middleware yazacağız.
 */

/**
 * ===========================================================================
 *
 * DERS - 3 : by derste farklı rotalar ve API bitiş noktaları (end point)
 * noktaları oluşturacağız. Bu end pointleri kullanarak veritabanı ile iletişim
 * kuracağız.
 *
 * ===========================================================================
 */

/**
 * request body e erişim sağlamanın yolu express.json middleware ini kullanmaktır.
 * Express json gelen isteğin bir body si olup olmadığına bakar.Olması durumunda
 * istek işleyiciye bunu ekler ve kullanmamızı sağlar.
 */

// middleware
app.use(express.json());

/**
 * ROUTES
 */
app.use("/api/workouts/", workoutRoutes);
