const cars = [
    {
        id: 1,
        name: "Honda CR-V Sport",
        category: "suv",
        year: 2023,
        mileage: "18,000 km",
        image: "car1.jpg",
        color: "Black",
        condition: "Foreign Used",
        engine: "1.5L Turbo",
        transmission: "CVT",
        fuel: "Petrol",
        description: "A stylish black Honda CR-V Sport with a turbocharged engine, offering a blend of comfort, space, and efficiency for city and highway drives.",
        features: ["Leather Seats", "Sunroof", "Reverse Camera", "Apple CarPlay", "Keyless Entry", "Alloy Wheels", "AWD"]
    },
    {
        id: 2,
        name: "Hyundai Accent",
        category: "sedan",
        year: 2018,
        mileage: "45,000 km",
        image: "car2.jpg",
        color: "Silver",
        condition: "Foreign Used",
        engine: "1.6L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A reliable and fuel-efficient silver Hyundai Accent, perfect for daily commuting with a comfortable cabin and modern features.",
        features: ["Bluetooth", "Air Conditioning", "Power Windows", "Alloy Wheels", "USB Connectivity", "Keyless Entry"]
    },
    {
        id: 3,
        name: "Toyota Avalon",
        category: "sedan",
        year: 2019,
        mileage: "32,000 km",
        image: "car3.jpg",
        color: "Red",
        condition: "Foreign Used",
        engine: "3.5L V6",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A premium full-size sedan with a powerful V6 engine, refined interior, and advanced safety features for a luxurious ride.",
        features: ["Leather Seats", "Sunroof", "JBL Sound", "Adaptive Cruise", "Lane Assist", "Heated Seats", "Push-to-Start"]
    },
    {
        id: 4,
        name: "Hyundai Accent",
        category: "sedan",
        year: 2017,
        mileage: "52,000 km",
        image: "car4.jpg",
        color: "Red",
        condition: "Foreign Used",
        engine: "1.6L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A compact and economical red Hyundai Accent that delivers excellent fuel economy and easy handling.",
        features: ["Bluetooth", "Air Conditioning", "Power Windows", "USB Connectivity", "Alloy Wheels"]
    },
    {
        id: 5,
        name: "Honda CR-V",
        category: "suv",
        year: 2023,
        mileage: "15,000 km",
        image: "car5.jpg",
        color: "Blue",
        condition: "Foreign Used",
        engine: "1.5L Turbo",
        transmission: "CVT",
        fuel: "Petrol",
        description: "A nearly-new blue Honda CR-V with a spacious interior, modern tech, and a smooth turbocharged ride.",
        features: ["Leather Seats", "Panoramic Roof", "Wireless CarPlay", "Reverse Camera", "Blind Spot Monitor", "Alloy Wheels"]
    },
    {
        id: 6,
        name: "Toyota Yaris",
        category: "sedan",
        year: 2018,
        mileage: "48,000 km",
        image: "car6.jpg",
        color: "Red",
        condition: "Foreign Used",
        engine: "1.5L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A practical and dependable Toyota Yaris sedan with low running costs and a comfortable cabin.",
        features: ["Bluetooth", "Air Conditioning", "Power Windows", "USB Connectivity", "Alloy Wheels"]
    },
    {
        id: 7,
        name: "Hyundai Santa Fe",
        category: "suv",
        year: 2017,
        mileage: "60,000 km",
        image: "car7.jpg",
        color: "Grey",
        condition: "Foreign Used",
        engine: "2.4L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A family-friendly Hyundai Santa Fe SUV with three-row seating, a strong 2.4L engine, and all-wheel-drive capability.",
        features: ["Leather Seats", "Third Row Seats", "Reverse Camera", "Bluetooth", "Roof Rails", "Alloy Wheels"]
    },
    {
        id: 8,
        name: "Honda Civic",
        category: "sedan",
        year: 2018,
        mileage: "38,000 km",
        image: "car8.jpg",
        color: "Black",
        condition: "Foreign Used",
        engine: "2.0L",
        transmission: "CVT",
        fuel: "Petrol",
        description: "A sleek black Honda Civic sedan with a sporty design, reliable performance, and a tech-filled interior.",
        features: ["Leather Seats", "Sunroof", "Apple CarPlay", "Reverse Camera", "Keyless Entry", "Alloy Wheels"]
    },
    {
        id: 9,
        name: "Hyundai Elantra",
        category: "sedan",
        year: 2016,
        mileage: "55,000 km",
        image: "car9.jpg",
        color: "Silver",
        condition: "Foreign Used",
        engine: "2.0L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A well-maintained silver Hyundai Elantra offering a smooth ride, great fuel economy, and a spacious cabin.",
        features: ["Bluetooth", "Air Conditioning", "Power Windows", "USB Connectivity", "Alloy Wheels"]
    },
    {
        id: 10,
        name: "Honda Civic",
        category: "sedan",
        year: 2020,
        mileage: "28,000 km",
        image: "car10.jpg",
        color: "Silver",
        condition: "Foreign Used",
        engine: "1.5L Turbo",
        transmission: "CVT",
        fuel: "Petrol",
        description: "A modern silver Honda Civic with turbocharged performance, advanced safety features, and a premium interior.",
        features: ["Leather Seats", "Sunroof", "Apple CarPlay", "Honda Sensing", "Reverse Camera", "Alloy Wheels"]
    },
    {
        id: 11,
        name: "Honda CR-V",
        category: "suv",
        year: 2019,
        mileage: "42,000 km",
        image: "car11.jpg",
        color: "White",
        condition: "Foreign Used",
        engine: "1.5L Turbo",
        transmission: "CVT",
        fuel: "Petrol",
        description: "A clean white Honda CR-V with a versatile interior, excellent safety ratings, and a fuel-efficient turbo engine.",
        features: ["Leather Seats", "Sunroof", "Reverse Camera", "Apple CarPlay", "Blind Spot Monitor", "Alloy Wheels"]
    },
    {
        id: 12,
        name: "Honda Civic",
        category: "sedan",
        year: 2020,
        mileage: "30,000 km",
        image: "car12.jpg",
        color: "Black",
        condition: "Foreign Used",
        engine: "1.5L Turbo",
        transmission: "CVT",
        fuel: "Petrol",
        description: "A sophisticated black Honda Civic sedan combining sporty looks, turbo power, and a refined interior.",
        features: ["Leather Seats", "Sunroof", "Apple CarPlay", "Reverse Camera", "Keyless Entry", "Alloy Wheels"]
    },
    {
        id: 13,
        name: "Honda Civic Type R",
        category: "hatchback",
        year: 2023,
        mileage: "8,000 km",
        image: "car13.jpg",
        color: "White",
        condition: "Foreign Used",
        engine: "2.0L Turbo",
        transmission: "Manual",
        fuel: "Petrol",
        description: "A high-performance Honda Civic Type R with aggressive styling, track-ready handling, and a thrilling 2.0L turbo engine.",
        features: ["Sport Seats", "Brembo Brakes", "Launch Control", "Performance Exhaust", "Adaptive Dampers", "Alloy Wheels"]
    },
    {
        id: 14,
        name: "Kia Soul",
        category: "hatchback",
        year: 2019,
        mileage: "35,000 km",
        image: "car14.jpg",
        color: "Grey",
        condition: "Foreign Used",
        engine: "2.0L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A quirky and practical Kia Soul with a boxy design, spacious cabin, and modern infotainment features.",
        features: ["Bluetooth", "Apple CarPlay", "Reverse Camera", "Alloy Wheels", "USB Connectivity"]
    },
    {
        id: 15,
        name: "Hyundai Kona",
        category: "suv",
        year: 2020,
        mileage: "33,000 km",
        image: "car15.jpg",
        color: "Red",
        condition: "Foreign Used",
        engine: "2.0L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A compact and stylish Hyundai Kona SUV with a peppy engine, modern tech, and nimble city handling.",
        features: ["Leather Seats", "Apple CarPlay", "Reverse Camera", "Blind Spot Monitor", "Alloy Wheels"]
    },
    {
        id: 16,
        name: "Toyota Corolla",
        category: "sedan",
        year: 2021,
        mileage: "25,000 km",
        image: "car16.jpg",
        color: "Red",
        condition: "Foreign Used",
        engine: "1.8L",
        transmission: "CVT",
        fuel: "Petrol",
        description: "A nearly-new Toyota Corolla with Toyota Safety Sense, exceptional reliability, and a comfortable ride.",
        features: ["Toyota Safety Sense", "Apple CarPlay", "Reverse Camera", "Adaptive Cruise", "Alloy Wheels"]
    },
    {
        id: 17,
        name: "Hyundai Kona",
        category: "suv",
        year: 2020,
        mileage: "36,000 km",
        image: "car17.jpg",
        color: "Red",
        condition: "Foreign Used",
        engine: "2.0L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "Another well-kept red Hyundai Kona offering great value, compact SUV practicality, and modern features.",
        features: ["Apple CarPlay", "Reverse Camera", "Bluetooth", "Alloy Wheels", "USB Connectivity"]
    },
    {
        id: 18,
        name: "Hyundai Tucson",
        category: "suv",
        year: 2023,
        mileage: "12,000 km",
        image: "car18.jpg",
        color: "Silver",
        condition: "Foreign Used",
        engine: "2.0L",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A nearly-new silver Hyundai Tucson with a bold design, premium interior, and the latest safety and connectivity features.",
        features: ["Leather Seats", "Panoramic Roof", "Wireless CarPlay", "Digital Dashboard", "Reverse Camera", "Alloy Wheels"]
    },
    {
        id: 19,
        name: "Ford F-150 Raptor",
        category: "truck",
        price: 800000,
        year: "—",
        mileage: "—",
        image: "car19.jpg",
        color: "White",
        condition: "Foreign Used",
        engine: "—",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "An imposing white Ford F-150 Raptor pickup with aggressive off-road styling, high-output performance, and a commanding presence on any road.",
        features: ["Alloy Wheels", "Leather Seats", "Off-Road Package", "Tow Package"]
    },
    {
        id: 20,
        name: "Geely Galaxy",
        category: "sedan",
        price: 600000,
        year: "—",
        mileage: "—",
        image: "car20.jpg",
        color: "Dark Grey",
        condition: "Foreign Used",
        engine: "—",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A sleek and modern Geely Galaxy sedan with a futuristic full-width light bar design, premium light-grey leather interior, and cutting-edge onboard technology.",
        features: ["Full-Width LED Light Bar", "Leather Seats", "Panoramic Display", "Alloy Wheels"]
    },
    {
        id: 21,
        name: "Changan UNI-K",
        category: "suv",
        price: 400000,
        year: "—",
        mileage: "—",
        image: "car21.jpg",
        color: "Black",
        condition: "Foreign Used",
        engine: "—",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A bold black Changan UNI-K SUV with a striking parametric grille, premium tech-loaded cabin featuring a wide floating display, and a confident road presence.",
        features: ["Parametric Grille Design", "Leather Seats", "Wide Floating Display", "Alloy Wheels"]
    },
    {
        id: 22,
        name: "GMC Canyon",
        category: "truck",
        price: 300000,
        year: "—",
        mileage: "—",
        image: "car22.jpg",
        color: "Black",
        condition: "Foreign Used",
        engine: "—",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A rugged black GMC Canyon pickup with a bold chrome grille, comfortable leather interior, and the versatility to handle both work and weekend adventures.",
        features: ["Leather Seats", "Chrome Grille", "Alloy Wheels", "Tow Package"]
    },
    {
        id: 23,
        name: "Hyundai Santa Fe Sport",
        category: "suv",
        price: 245000,
        year: "—",
        mileage: "—",
        image: "car23.jpg",
        color: "Blue",
        condition: "Foreign Used",
        engine: "—",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A stylish blue Hyundai Santa Fe Sport SUV with a refined interior, smooth turbocharged performance, and all-wheel-drive confidence in all conditions.",
        features: ["Leather Seats", "All-Wheel Drive", "Reverse Camera", "Alloy Wheels"]
    },
    {
        id: 24,
        name: "Honda HR-V",
        category: "suv",
        price: 140000,
        year: "—",
        mileage: "—",
        image: "car24.jpg",
        color: "Green",
        condition: "Foreign Used",
        engine: "—",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A compact and practical green Honda HR-V SUV, perfect for city driving with a comfortable cabin, efficient performance, and versatile cargo space.",
        features: ["Alloy Wheels", "Air Conditioning", "Bluetooth", "Reverse Camera"]
    },
    {
        id: 25,
        name: "Honda Accord",
        category: "sedan",
        price: null,
        year: "—",
        mileage: "—",
        image: "car25.jpg",
        color: "Grey",
        condition: "Foreign Used",
        engine: "—",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A sophisticated grey Honda Accord sedan offering a comfortable ride, spacious premium interior, and dependable everyday performance.",
        features: ["Alloy Wheels", "Leather Seats", "Air Conditioning", "Bluetooth"]
    },
    {
        id: 26,
        name: "Honda Civic",
        category: "sedan",
        price: null,
        year: "—",
        mileage: "—",
        image: "car26.jpg",
        color: "White",
        condition: "Foreign Used",
        engine: "—",
        transmission: "Automatic",
        fuel: "Petrol",
        description: "A clean white Honda Civic sedan with a sporty design, reliable performance, and a well-equipped interior for comfortable daily driving.",
        features: ["Alloy Wheels", "Sunroof", "Air Conditioning", "Bluetooth"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const carGrid = document.getElementById('car-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contact-form');
    const contactCar = document.getElementById('contact-car');
    const submitBtn = document.getElementById('submit-btn');

    function populateContactSelect() {
        if (!contactCar) return;
        contactCar.innerHTML = '<option value="" disabled selected>Interested in...</option><option value="General Inquiry">General Inquiry</option>';
        cars.forEach(car => {
            const option = document.createElement('option');
            option.value = car.name;
            option.textContent = `${car.name} (${car.year})`;
            contactCar.appendChild(option);
        });
    }

    // Inventory page logic
    if (carGrid) {
        function displayCars(filter = 'all') {
            carGrid.innerHTML = '';

            const filteredCars = filter === 'all'
                ? cars
                : cars.filter(car => car.category === filter);

            filteredCars.forEach(car => {
                const carCard = document.createElement('div');
                carCard.className = 'car-card';
                carCard.setAttribute('data-id', car.id);
                const priceHtml = car.price
                    ? `<div class="car-price">GH&#8373; ${car.price.toLocaleString('en-US')}</div>`
                    : (car.price === null ? '<div class="car-price on-request">Price on request</div>' : '');
                const metaParts = [];
                if (car.year && car.year !== '—') metaParts.push(car.year);
                if (car.mileage && car.mileage !== '—') metaParts.push(car.mileage);
                const metaHtml = metaParts.length
                    ? `<div class="car-details"><span>${metaParts.join('</span><span>')}</span></div>`
                    : '';
                carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="car-img" loading="lazy">
                    <div class="car-info">
                        <h3>${car.name}</h3>
                        ${metaHtml}
                        ${priceHtml}
                        <button class="btn btn-primary" style="display: block; width: 100%; text-align: center;">View Details</button>
                    </div>
                `;
                carCard.addEventListener('click', () => {
                    window.location.href = `car-details.html?id=${car.id}`;
                });
                carGrid.appendChild(carCard);
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                displayCars(btn.dataset.filter);
            });
        });

        displayCars();
    }

    // Mobile Menu Logic
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // Contact form feedback
    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', () => {
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
        });
    }

    // Pre-select car from URL on contact page
    if (contactCar) {
        populateContactSelect();
        const params = new URLSearchParams(window.location.search);
        const carName = params.get('car');
        if (carName) {
            let exists = false;
            for (const option of contactCar.options) {
                if (option.value === carName) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                const option = document.createElement('option');
                option.value = carName;
                option.textContent = carName;
                contactCar.appendChild(option);
            }
            contactCar.value = carName;
        }
    } else {
        populateContactSelect();
    }
});
