const products = [
    
        {
            id: 1,
            category: "laptop",
            title: "Gigabyte AORUS 7",
            price: 1150,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/71kQLdb2kEL._AC_SL1500_.jpg",
            description: "17.3, FHD 1920x1080 360Hz, NVIDIA GeForce RTX 4060 Laptop GPU 8GB GDDR6, Intel Core i5-12500H, 16GB DDR4 RAM, 512GB SSD"
        },
        {
            id: 2,
            category: "laptop",
            title: "ASUS ROG Strix G16",
            price: 1270,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_SL1500_.jpg",
            description: "Nebula Display 16:10 QHD 240Hz, GeForce RTX 4070, Intel Core i9-13980HX, 32GB DDR5, 1TB PCIe SSD, Wi-Fi 6E"
        },
        {
            id: 3,
            category: "laptop",
            title: "Dell G15 5520",
            price: 1130,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/71fabhpr3oL._AC_SL1500_.jpg",
            description: "15.6 Inch Gaming Laptop, FHD 120Hz Display, Intel Core i7-12700H, 16GB DDR5 RAM, 512GB SSD, NVIDIA RTX 3060, Wi-Fi 6"
        },
        {
            id: 4,
            category: "laptop",
            title: "Acer Swift 5 Intel Evo Thin",
            price: 1390,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/71NkCJwRoNL._AC_SL1500_.jpg",
            description: "Intel Evo Thin & Light Laptop, 14 WXGA IPS 100% sRGB Touch, 12th Gen Intel i7-1260P, Intel Iris Xe Graphics, 16GB LPDDR5"
        },
        {
            id: 5,
            category: "laptop",
            title: "MSI Katana 15",
            price: 1400,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/61cMntcROkL._AC_SL1500_.jpg",
            description: "144Hz FHD Gaming Laptop: 13th Gen Intel Core i7, RTX 4070, 16GB DDR5, 1TB NVMe SSD, USB-Type C, Cooler Boost 5"
        },   
        {
            id: 6,
            category: "laptop",
            title: "MSI Cyborg",
            price: 1100,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/71ZKm5YVb8L._AC_SL1500_.jpg",
            description: "Intel i5-12450H, NVIDIA GEFORCE RTX 4050, 32GB 4800MHz DDR5 RAM 2TB PCIe SSD"
        },
        {
            id: 7,
            category: "laptop",
            title: "MSI Stealth 15M",
            price: 1500,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/51BNSy53dNL._AC_SL1000_.jpg",
            description: "144Hz FHD 1080p Display, Intel Core i7-11375H, NVIDIA GeForce RTX 3060, 16GB, 512GB SSD"
        },
        {
            id: 8,
            category: "laptop",
            title: "MSI Thin GF63",
            price: 1200,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/5125bFpYbiL._AC_SL1000_.jpg",
            description: "144Hz Gaming Laptop: 12th Gen Intel Core i7, NVIDIA GeForce RTX 4050, 16GB DDR4, 512GB NVMe SSD, Type-C, Cooler Boost 5"
        },
        {
            id: 9,
            category: "headsets",
            title: "Logitech G432",
            price: 30,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/61j6ey6mBpL._AC_SL1024_.jpg",
            description: "Wired Gaming Headset, 7.1 Surround Sound, DTS Headphone:X 2.0, Flip-to-Mute Mic, PC (Leatherette) Black/Blue, 7.2 x 3.2 x 6.8 inches"
        },
        {
            id: 10,
            category: "headsets",
            title: "HyperX Cloud II",
            price: 78,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/71MJ3OaVqBL._AC_SL1500_.jpg",
            description: "Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads, Durable Aluminum Frame, Detachable Microphone, Works with PC, PS5, PS4, Xbox Series X|S, Xbox One – Red"
        },
        {
            id: 11,
            category: "headsets",
            title: "HyperX Cloud Alpha",
            price: 75,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/71edOQCr9gL._AC_SL1500_.jpg",
            description: "Gaming Headset - TimTheTatMan Edition - for PC, PS5, and Xbox, Dual Chamber Drivers, Memory Foam, Soft Leatherette, Durable Aluminum Frame, Detachable Noise-Cancelling Microphone"
        },
        {
            id: 12,
            category: "headsets",
            title: "Sony INZONE H9",
            price: 200,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/61ERB8VOQ8L._AC_SL1500_.jpg",
            description: "Wireless Noise Canceling Gaming Headset, Over-Ear Headphones with 360 Spatial Sound, WH-G900N, Black"
        },
        {
            id: 13,
            category: "keyboards",
            title: "Newmen GM326",
            price: 30,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/61C5t7a4H0L._AC_SL1500_.jpg",
            description: "Mechanical Gaming Keyboard, 82 Keys Gasket Hot Swappable Wired Mechanical Keyboard with Rainbow LED Backlit NKRO Compact Gaming Keyboard with Knob for Windows and Mac(Red Switches)"
        },
        {
            id: 14,
            category: "keyboards",
            title: "MageGee Portable",
            price: 30,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_SL1500_.jpg",
            description: "Mechanical Gaming Keyboard, MK-Box LED Backlit Compact 68 Keys Mini Wired Office Keyboard with Red Switch for Windows Laptop PC Mac - Black/Grey"
        },
        {
            id: 15,
            category: "keyboards",
            title: "Redragon 60",
            price: 40,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/61LcZpKWW-L._AC_SL1500_.jpg",
            description: "Mechanical Gaming Keyboard, 68 Keys Wired Office RGB Keyboard with Arrow Keys, Programmable Macro, Red Switches for Windows Mac PC Laptop, Black/Beige/Orange"
        },
        {
            id: 16,
            category: "keyboards",
            title: "Newmen GM610 ",
            price: 35,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/61TTWsoUZiS._AC_SL1500_.jpg",
            description: "Wireless Mechanical Keyboard,Wired/Bluetooth RGB Backlit,61 Anti-Ghosting Keys,Programmable,Hot-Swappable Gaming Keyboard,for PC Windows Mac Laptop Computer(Linear Red Switch)"
        },
        {
            id: 17,
            category: "mouses",
            title: "Logitech G203",
            price: 25,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SL1500_.jpg",
            description: "Wired Gaming Mouse, 8,000 DPI, Rainbow Optical Effect LIGHTSYNC RGB, 6 Programmable Buttons, On-Board Memory, Screen Mapping, PC/Mac Computer and Laptop Compatible - Black"
        },
        {
            id: 18,
            category: "mouses",
            title: "Glorious O Minus 58",
            price: 47,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/717Hz1ukCEL._AC_SL1500_.jpg",
            description: "Superlight Honeycomb Mouse, Glossy White Mouse, USB Gaming Mouse"
        },
        {
            id: 19,
            category: "mouses",
            title: "Corsair Dark Core RGB Pro SE",
            price: 20,
            stock: 100,
            image: "https://m.media-amazon.com/images/I/61RdgVQ43TL._AC_SL1500_.jpg",
            description: "FPS/MOBA Gaming Mouse with SLIPSTREAM Technology, Black, Backlit RGB LED, 18000 DPI, Optical, Qi wireless charging certified"
        },
        {
            id: 20,
            category: "mouses",
            title: "Razer Viper Ultimate",
            price: 110,
            stock: 10,
            image: "https://m.media-amazon.com/images/I/61M7B24YNEL._AC_SL1500_.jpg",
            description: "Hyperspeed Lightest Wireless Gaming Mouse & RGB Charging Dock: Fastest Gaming Mouse Switch - 20K DPI Optical Sensor - Chroma Lighting - 8 Programmable Buttons - 70 Hr Battery"
        }
         
];

export const getProducts = () => {
    
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
};

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = products.find((element) => element.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}