const destinos = {
            roma: {
                titulo: "Roma",
                continente: "Europa",
                categorias: "europa ciudad romantico",
                texto: "Historia, plazas monumentales, trattorias y ruinas antiguas para una escapada intensa.",
                dias: "3 días",
                precio: "Desde 280 euros",
                presupuesto: "280 - 420 euros",
                gasto: "$$",
                clima: "Mediterráneo",
                moneda: "Euro",
                idioma: "Italiano",
                epoca: "Marzo, abril, mayo, septiembre y octubre.",
                imprescindibles: "Coliseo, Foro Romano, Trastevere, Fontana di Trevi.",
                gastronomia: "Carbonara, pizza romana, tiramisú.",
                ruta: ["Coliseo y Foro Romano por la mañana.", "Pasta en Trastevere y paseo por sus calles.", "Fontana di Trevi, Panteón y Piazza Navona al atardecer."],
                fotos: ["https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1548585742-1df49e753a83?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Rome%20Italy"
            },
            paris: {
                titulo: "París",
                continente: "Europa",
                categorias: "europa ciudad romantico",
                texto: "Museos, paseos junto al Sena, cafés, miradores y una ciudad perfecta para escapadas románticas.",
                dias: "4 días",
                precio: "Desde 340 euros",
                presupuesto: "340 - 520 euros",
                gasto: "$$$",
                clima: "Templado",
                moneda: "Euro",
                idioma: "Francés",
                epoca: "Abril, mayo, junio, septiembre y diciembre.",
                imprescindibles: "Torre Eiffel, Louvre, Montmartre, Trocadero.",
                gastronomia: "Croissant, crêpes, macarons, queso francés.",
                ruta: ["Torre Eiffel y jardines del Trocadero.", "Museo del Louvre y paseo por el Sena.", "Montmartre, Sacré Coeur y cena en una calle con ambiente."],
                fotos: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Paris%20France"
            },
            venecia: {
                titulo: "Venecia",
                continente: "Europa",
                categorias: "europa ciudad romantico",
                texto: "Canales, puentes, callejones y atardeceres sobre el agua.",
                dias: "2 días",
                precio: "Desde 310 euros",
                presupuesto: "310 - 480 euros",
                gasto: "$$$",
                clima: "Húmedo mediterráneo",
                moneda: "Euro",
                idioma: "Italiano",
                epoca: "Marzo, abril, octubre y noviembre.",
                imprescindibles: "San Marcos, Rialto, Gran Canal, Dorsoduro.",
                gastronomia: "Cicchetti, risotto, tiramisú.",
                ruta: ["Plaza de San Marcos y Basílica.", "Paseo por el Gran Canal y puente de Rialto.", "Perderse por calles pequeñas lejos de las zonas más llenas."],
                fotos: ["https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Venice%20Italy"
            },
            mallorca: {
                titulo: "Mallorca",
                continente: "Europa",
                categorias: "europa playa romantico",
                texto: "Calas transparentes, pueblos de piedra, montaña y rutas de costa.",
                dias: "5 días",
                precio: "Desde 360 euros",
                presupuesto: "360 - 600 euros",
                gasto: "$$",
                clima: "Mediterráneo",
                moneda: "Euro",
                idioma: "Español y catalán",
                epoca: "Mayo, junio, septiembre y principios de octubre.",
                imprescindibles: "Valldemossa, Deià, Formentor, calas del sureste.",
                gastronomia: "Ensaimada, tumbet, sobrasada.",
                ruta: ["Cala bonita por la mañana y comida junto al mar.", "Pueblos como Valldemossa o Deià.", "Ruta al atardecer por la Serra de Tramuntana."],
                fotos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Mallorca%20Spain"
            },
            barcelona: {
                titulo: "Barcelona",
                continente: "Europa",
                categorias: "europa ciudad playa",
                texto: "Arquitectura modernista, barrios con vida, playa urbana y miradores.",
                dias: "3 días",
                precio: "Desde 260 euros",
                presupuesto: "260 - 430 euros",
                gasto: "$$",
                clima: "Mediterráneo",
                moneda: "Euro",
                idioma: "Español y catalán",
                epoca: "Marzo, abril, mayo, septiembre y octubre.",
                imprescindibles: "Sagrada Familia, Born, Gótico, Montjuïc.",
                gastronomia: "Pa amb tomàquet, tapas, crema catalana.",
                ruta: ["Sagrada Familia y paseo por Passeig de Gràcia.", "Barrio Gótico, Born y comida local.", "Playa, Barceloneta y atardecer en Montjuïc."],
                fotos: ["https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Barcelona%20Spain"
            },
            tokio: {
                titulo: "Tokio",
                continente: "Asia",
                categorias: "asia ciudad",
                texto: "Templos tranquilos, barrios futuristas, neones, mercados y comida japonesa para todos los presupuestos.",
                dias: "6 días",
                precio: "Desde 850 euros",
                presupuesto: "850 - 1.250 euros",
                gasto: "$$$",
                clima: "Templado húmedo",
                moneda: "Yen japonés",
                idioma: "Japonés",
                epoca: "Marzo, abril, mayo, octubre y noviembre.",
                imprescindibles: "Asakusa, Shibuya, Akihabara, Harajuku.",
                gastronomia: "Ramen, sushi, takoyaki, curry japonés.",
                ruta: ["Asakusa, templo Senso-ji y paseo por calles tradicionales.", "Shibuya, Harajuku y miradores urbanos al atardecer.", "Mercado de pescado, Akihabara y cena de ramen o sushi económico."],
                fotos: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Tokyo%20Japan"
            },
            kioto: {
                titulo: "Kioto",
                continente: "Asia",
                categorias: "asia ciudad romantico",
                texto: "Templos, jardines, casas de té, bosques de bambú y tradición japonesa.",
                dias: "4 días",
                precio: "Desde 780 euros",
                presupuesto: "780 - 1.150 euros",
                gasto: "$$$",
                clima: "Templado",
                moneda: "Yen japonés",
                idioma: "Japonés",
                epoca: "Marzo, abril, mayo, octubre y noviembre.",
                imprescindibles: "Fushimi Inari, Arashiyama, Gion, Kiyomizu-dera.",
                gastronomia: "Kaiseki, matcha, yudofu.",
                ruta: ["Fushimi Inari temprano.", "Gion y templos del este.", "Bosque de bambú de Arashiyama y paseo junto al río."],
                fotos: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Kyoto%20Japan"
            },
            seul: {
                titulo: "Seúl",
                continente: "Asia",
                categorias: "asia ciudad",
                texto: "Palacios, barrios creativos, compras, cafés y comida callejera coreana.",
                dias: "5 días",
                precio: "Desde 760 euros",
                presupuesto: "760 - 1.120 euros",
                gasto: "$$",
                clima: "Continental húmedo",
                moneda: "Won surcoreano",
                idioma: "Coreano",
                epoca: "Abril, mayo, septiembre y octubre.",
                imprescindibles: "Gyeongbokgung, Hongdae, Myeongdong, Namsan.",
                gastronomia: "Bibimbap, kimchi, tteokbokki, barbecue coreano.",
                ruta: ["Palacio Gyeongbokgung y Bukchon Hanok Village.", "Hongdae, tiendas y cafés.", "Namsan Tower y comida callejera en Myeongdong."],
                fotos: ["https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Seoul%20South%20Korea"
            },
            bangkok: {
                titulo: "Bangkok",
                continente: "Asia",
                categorias: "asia ciudad",
                texto: "Templos dorados, mercados, rascacielos, tuk-tuks y comida callejera.",
                dias: "4 días",
                precio: "Desde 690 euros",
                presupuesto: "690 - 1.000 euros",
                gasto: "$",
                clima: "Tropical",
                moneda: "Baht tailandés",
                idioma: "Tailandés",
                epoca: "Noviembre, diciembre, enero y febrero.",
                imprescindibles: "Gran Palacio, Wat Arun, Chinatown, Chatuchak.",
                gastronomia: "Pad thai, mango sticky rice, tom yum.",
                ruta: ["Gran Palacio y Wat Pho.", "Wat Arun al atardecer.", "Chinatown y mercado nocturno."],
                fotos: ["https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Bangkok%20Thailand"
            },
            hanoi: {
                titulo: "Hanói",
                continente: "Asia",
                categorias: "asia ciudad",
                texto: "Calles con motos, lago, mercados, arquitectura colonial y sabor vietnamita.",
                dias: "4 días",
                precio: "Desde 650 euros",
                presupuesto: "650 - 950 euros",
                gasto: "$",
                clima: "Subtropical húmedo",
                moneda: "Dong vietnamita",
                idioma: "Vietnamita",
                epoca: "Marzo, abril, octubre y noviembre.",
                imprescindibles: "Old Quarter, Hoan Kiem, Train Street, Mausoleo de Ho Chi Minh.",
                gastronomia: "Pho, bun cha, banh mi, café con huevo.",
                ruta: ["Old Quarter y lago Hoan Kiem.", "Templo de la Literatura y cafés locales.", "Excursión a bahía de Ha Long si hay tiempo."],
                fotos: ["https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Hanoi%20Vietnam"
            },
            singapur: {
                titulo: "Singapur",
                continente: "Asia",
                categorias: "asia ciudad",
                texto: "Jardines futuristas, rascacielos, barrios culturales y hawker centres.",
                dias: "3 días",
                precio: "Desde 820 euros",
                presupuesto: "820 - 1.250 euros",
                gasto: "$$$$",
                clima: "Tropical",
                moneda: "Dólar de Singapur",
                idioma: "Inglés, malayo, mandarín y tamil",
                epoca: "Febrero, marzo, julio y agosto.",
                imprescindibles: "Marina Bay, Gardens by the Bay, Chinatown, Little India.",
                gastronomia: "Hainanese chicken rice, laksa, satay.",
                ruta: ["Marina Bay y Gardens by the Bay.", "Chinatown y Little India.", "Hawker centre y paseo por la bahía de noche."],
                fotos: ["https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Singapore"
            },
            bali: {
                titulo: "Bali",
                continente: "Asia",
                categorias: "asia playa romantico",
                texto: "Playas, arrozales, templos, cascadas y villas con ambiente relajado.",
                dias: "7 días",
                precio: "Desde 790 euros",
                presupuesto: "790 - 1.250 euros",
                gasto: "$$",
                clima: "Tropical",
                moneda: "Rupia indonesia",
                idioma: "Indonesio",
                epoca: "Mayo, junio, septiembre y octubre.",
                imprescindibles: "Ubud, Uluwatu, Canggu, terrazas de arroz.",
                gastronomia: "Nasi goreng, mie goreng, satay.",
                ruta: ["Ubud, arrozales y templos.", "Cascadas y pueblos de interior.", "Playas de Uluwatu y atardecer."],
                fotos: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Bali%20Indonesia"
            },
            dubai: {
                titulo: "Dubái",
                continente: "Asia",
                categorias: "asia ciudad playa",
                texto: "Rascacielos, desierto, playas, centros comerciales y experiencias llamativas.",
                dias: "4 días",
                precio: "Desde 620 euros",
                presupuesto: "620 - 1.100 euros",
                gasto: "$$$",
                clima: "Desértico",
                moneda: "Dírham emiratí",
                idioma: "Árabe e inglés",
                epoca: "Noviembre, diciembre, enero, febrero y marzo.",
                imprescindibles: "Burj Khalifa, Dubai Marina, desierto, Creek.",
                gastronomia: "Shawarma, machboos, dátiles, comida libanesa.",
                ruta: ["Burj Khalifa y Dubai Mall.", "Dubai Marina y playa.", "Excursión al desierto al atardecer."],
                fotos: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Dubai%20United%20Arab%20Emirates"
            },
            kualaLumpur: {
                titulo: "Kuala Lumpur",
                continente: "Asia",
                categorias: "asia ciudad",
                texto: "Torres icónicas, templos, mercados nocturnos y mezcla cultural.",
                dias: "3 días",
                precio: "Desde 680 euros",
                presupuesto: "680 - 980 euros",
                gasto: "$",
                clima: "Tropical",
                moneda: "Ringgit malayo",
                idioma: "Malayo e inglés",
                epoca: "Mayo, junio, julio y agosto.",
                imprescindibles: "Torres Petronas, Batu Caves, Bukit Bintang, Chinatown.",
                gastronomia: "Nasi lemak, roti canai, laksa.",
                ruta: ["Torres Petronas y KLCC.", "Batu Caves por la mañana.", "Jalan Alor y mercado nocturno."],
                fotos: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f11?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1576938938788-846bb9981813?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Kuala%20Lumpur%20Malaysia"
            },
            taipei: {
                titulo: "Taipéi",
                continente: "Asia",
                categorias: "asia ciudad",
                texto: "Mercados nocturnos, templos, montaña cercana y una escena gastronómica brutal.",
                dias: "4 días",
                precio: "Desde 760 euros",
                presupuesto: "760 - 1.080 euros",
                gasto: "$$",
                clima: "Subtropical",
                moneda: "Nuevo dólar taiwanés",
                idioma: "Mandarín",
                epoca: "Marzo, abril, octubre y noviembre.",
                imprescindibles: "Taipei 101, Shilin, Longshan, Elephant Mountain.",
                gastronomia: "Bubble tea, beef noodle soup, xiao long bao.",
                ruta: ["Taipei 101 y Elephant Mountain.", "Templo Longshan y barrios tradicionales.", "Mercado nocturno de Shilin."],
                fotos: ["https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1542737579-ba0a385f3b6d?auto=format&fit=crop&w=900&q=80"],
                mapa: "https://www.google.com/maps/search/?api=1&query=Taipei%20Taiwan"
            }
        };

        let filtroActivo = "todos";
        let favoritos = JSON.parse(localStorage.getItem("favoritosRutaLowCost") || "[]");

        function crearTarjetas() {
            const lista = document.getElementById("listaDestinos");
            lista.innerHTML = "";

            Object.entries(destinos).forEach(function([clave, destino]) {
                const tarjeta = document.createElement("article");
                tarjeta.className = "tarjeta";
                tarjeta.dataset.categoria = destino.categorias;
                tarjeta.dataset.busqueda = [
                    destino.titulo,
                    destino.continente,
                    destino.texto,
                    destino.moneda,
                    destino.idioma,
                    destino.gastronomia,
                    destino.imprescindibles
                ].join(" ").toLowerCase();

                tarjeta.innerHTML = `
                    <div class="imagen-tarjeta">
                        <img src="${destino.fotos[0]}" alt="${destino.titulo}" onerror="usarImagenReserva(event)">
                        <button class="favorito ${favoritos.includes(clave) ? "activo" : ""}" onclick="alternarFavorito('${clave}', event)" title="Guardar favorito">♥</button>
                    </div>
                    <div class="tarjeta-contenido">
                        <h3>${destino.titulo}</h3>
                        <p>${destino.texto}</p>
                        <div class="meta">
                            <span>${destino.continente}</span>
                            <span>${destino.dias}</span>
                            <span>${destino.gasto}</span>
                        </div>
                        <button onclick="mostrarDestino('${clave}')">Ver guía</button>
                    </div>
                `;

                lista.appendChild(tarjeta);
            });

            document.getElementById("totalDestinos").textContent = Object.keys(destinos).length;
            actualizarFavoritos();
            actualizarDestinos();
        }

        function mostrarDestino(nombre) {
            const destino = destinos[nombre];
            const visor = document.getElementById("visor");
            const galeria = document.getElementById("galeria");
            const rutaDestino = document.getElementById("rutaDestino");
            const visorMeta = document.getElementById("visorMeta");
            const infoDestino = document.getElementById("infoDestino");
            const detalleExtra = document.getElementById("detalleExtra");
            const heroDestino = document.getElementById("heroDestino");
            const enlaceMapa = document.getElementById("enlaceMapa");

            document.getElementById("visorTitulo").textContent = destino.titulo;
            document.getElementById("visorTexto").textContent = destino.texto;
            heroDestino.style.backgroundImage = `url("${destino.fotos[0]}")`;
            enlaceMapa.href = destino.mapa;

            visorMeta.innerHTML = "";
            [destino.continente, destino.dias, destino.precio, destino.gasto].forEach(function(dato) {
                const etiqueta = document.createElement("span");
                etiqueta.textContent = dato;
                visorMeta.appendChild(etiqueta);
            });

            infoDestino.innerHTML = "";
            [
                ["Presupuesto", destino.presupuesto],
                ["Mejor época", destino.epoca],
                ["Clima", destino.clima],
                ["Moneda", destino.moneda],
                ["Idioma", destino.idioma],
                ["Nivel de gasto", destino.gasto]
            ].forEach(function(detalle) {
                infoDestino.appendChild(crearDetalle(detalle[0], detalle[1]));
            });

            rutaDestino.innerHTML = "";
            destino.ruta.forEach(function(paso) {
                const item = document.createElement("li");
                item.textContent = paso;
                rutaDestino.appendChild(item);
            });

            detalleExtra.innerHTML = "";
            detalleExtra.appendChild(crearDetalle("Lugares imprescindibles", destino.imprescindibles));
            detalleExtra.appendChild(crearDetalle("Gastronomía típica", destino.gastronomia));

            galeria.innerHTML = "";
            destino.fotos.forEach(function(foto) {
                const imagen = document.createElement("img");
                imagen.src = foto;
                imagen.alt = "Foto de " + destino.titulo;
                imagen.onerror = usarImagenReserva;
                imagen.onclick = function() {
                    abrirGaleria(foto, imagen.alt);
                };
                galeria.appendChild(imagen);
            });

            visor.classList.add("visible");
            visor.scrollIntoView({ behavior: "smooth" });
        }

        function crearDetalle(titulo, texto) {
            const caja = document.createElement("div");
            const fuerte = document.createElement("strong");
            const span = document.createElement("span");
            fuerte.textContent = titulo;
            span.textContent = texto;
            caja.appendChild(fuerte);
            caja.appendChild(span);
            return caja;
        }

        function cambiarFiltro(categoria, boton) {
            document.querySelectorAll(".filtro").forEach(function(filtro) {
                filtro.classList.remove("activo");
            });

            boton.classList.add("activo");
            filtroActivo = categoria;
            actualizarDestinos();
        }

        function actualizarDestinos() {
            const tarjetas = document.querySelectorAll(".tarjeta");
            const busqueda = document.getElementById("buscadorDestinos").value.toLowerCase().trim();
            const aviso = document.getElementById("sinResultados");
            let visibles = 0;

            tarjetas.forEach(function(tarjeta) {
                const categorias = tarjeta.dataset.categoria;
                const texto = tarjeta.dataset.busqueda + " " + tarjeta.textContent.toLowerCase();
                const coincideFiltro = filtroActivo === "todos" || categorias.includes(filtroActivo);
                const coincideBusqueda = busqueda === "" || texto.includes(busqueda) || categorias.includes(busqueda);
                const seMuestra = coincideFiltro && coincideBusqueda;

                tarjeta.style.display = seMuestra ? "block" : "none";
                if (seMuestra) {
                    visibles++;
                }
            });

            aviso.style.display = visibles === 0 ? "block" : "none";
            document.getElementById("contadorVisibles").textContent = visibles + " destinos visibles";
        }

        function alternarFavorito(clave, evento) {
            evento.stopPropagation();

            if (favoritos.includes(clave)) {
                favoritos = favoritos.filter(function(favorito) {
                    return favorito !== clave;
                });
            } else {
                favoritos.push(clave);
            }

            localStorage.setItem("favoritosRutaLowCost", JSON.stringify(favoritos));
            document.querySelectorAll(".favorito").forEach(function(boton) {
                boton.classList.remove("activo");
            });
            favoritos.forEach(function(favorito) {
                const boton = document.querySelector(`button[onclick*="'${favorito}'"]`);
                if (boton && boton.classList.contains("favorito")) {
                    boton.classList.add("activo");
                }
            });
            crearTarjetas();
        }

        function actualizarFavoritos() {
            document.getElementById("totalFavoritos").textContent = favoritos.length;
        }

        function abrirGaleria(src, alt) {
            const modal = document.getElementById("modalGaleria");
            const imagen = document.getElementById("imagenModal");
            imagen.src = src;
            imagen.alt = alt;
            modal.classList.add("visible");
        }

        function cerrarGaleria() {
            document.getElementById("modalGaleria").classList.remove("visible");
        }

        function usarImagenReserva(evento) {
            evento.target.src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80";
        }

        function enviarFormulario(evento) {
            evento.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const tipoViaje = document.getElementById("tipoViaje").value;
            const recomendaciones = {
                ciudad: "Tokio, Seúl o Barcelona",
                playa: "Bali, Mallorca o Dubái",
                romantico: "París, Kioto o Venecia",
                asia: "Tokio, Bali o Bangkok",
                europa: "Roma, París o Barcelona"
            };

            document.getElementById("resultadoContacto").textContent =
                nombre + ", para ese tipo de viaje te recomiendo: " + recomendaciones[tipoViaje] + ".";
        }

        document.getElementById("modoOscuro").addEventListener("click", function() {
            document.body.classList.toggle("oscuro");
            this.textContent = document.body.classList.contains("oscuro") ? "☀️" : "🌙";
        });

        const botonArriba = document.getElementById("volverArriba");
        botonArriba.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        window.addEventListener("scroll", function() {
            botonArriba.classList.toggle("visible", window.scrollY > 600);
        });

        const observador = new IntersectionObserver(function(entradas) {
            entradas.forEach(function(entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll(".revelar").forEach(function(elemento) {
            observador.observe(elemento);
        });

        crearTarjetas();
