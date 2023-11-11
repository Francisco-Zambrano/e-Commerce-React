const products = [
    
        {
            id: 1,
            category: "gamer",
            title: "Gigabyte AORUS 7",
            price: 1150,
            stock: 20,
            image: "https://static.gigabyte.com/StaticFile/Image/Global/23a4767a024c992b9162d4863cbcb1fb/Product/25638",
            description: "17.3, FHD 1920x1080 360Hz, NVIDIA GeForce RTX 4060 Laptop GPU 8GB GDDR6, Intel Core i5-12500H, 16GB DDR4 RAM, 512GB SSD"
        },
        {
            id: 2,
            category: "gamer",
            title: "ASUS ROG Strix G16",
            price: 1270,
            stock: 20,
            image: "https://dlcdnwebimgs.asus.com/gain/1248C5D8-EED2-4EBF-989E-935829BD4990/w717/h525",
            description: "Nebula Display 16:10 QHD 240Hz, GeForce RTX 4070, Intel Core i9-13980HX, 32GB DDR5, 1TB PCIe SSD, Wi-Fi 6E"
        },
        {
            id: 3,
            category: "gamer",
            title: "ASUS TUF Gaming F15",
            price: 900,
            stock: 20,
            image: "https://dlcdnwebimgs.asus.com/gain/3a36a12f-9a0d-488c-bef3-05431f041b96/",
            description: "144Hz FHD Display, Intel Core i5-11400H Processor, GeForce RTX 2050, 8GB DDR4 RAM, 512GB PCIe SSD Gen 3, Wi-Fi 6"
        },
        {
            id: 4,
            category: "gamer",
            title: "MSI Thin GF63",
            price: 1200,
            stock: 20,
            image: "https://www.fullh4rd.com.ar/img/productos/32/notebook-gamer-msi-156-gf63-thin-11uc0269ar-i5-8gb-256gb-0.jpg",
            description: "144Hz Gaming Laptop: 12th Gen Intel Core i7, NVIDIA GeForce RTX 4050, 16GB DDR4, 512GB NVMe SSD, Type-C, Cooler Boost 5"
        },
        {
            id: 5,
            category: "gamer",
            title: "Acer Nitro 5 AN515-58",
            price: 1350,
            stock: 20,
            image: "https://images.acer.com/is/image/acer/nitro5-an515-58-wallpaper-rgbkb-light-on-black-bby-01-1",
            description: "Intel Core i5-12500H, NVIDIA GeForce RTX 3050 Ti Laptop GPU, FHD 144Hz IPS Display, 16GB DDR4, 512GB Gen 4 SSD, Killer Wi-Fi 6"
        },
        {
            id: 6,
            category: "design",
            title: "Dell G15 5520",
            price: 1130,
            stock: 20,
            image: "https://dummyimage.com/200x100.png/cc0000/ffffff",
            description: "15.6 Inch Gaming Laptop, FHD 120Hz Display, Intel Core i7-12700H, 16GB DDR5 RAM, 512GB SSD, NVIDIA RTX 3060, Wi-Fi 6"
        },
        {
            id: 7,
            category: "design",
            title: "Acer Swift 5 Intel Evo Thin",
            price: 1390,
            stock: 20,
            image: "https://dummyimage.com/200x100.png/5fa2dd/ffffff",
            description: "Intel Evo Thin & Light Laptop, 14 WXGA IPS 100% sRGB Touch, 12th Gen Intel i7-1260P, Intel Iris Xe Graphics, 16GB LPDDR5"
        },
        {
            id: 8,
            category: "gamer",
            title: "MSI Katana 15",
            price: 1400,
            stock: 20,
            image: "https://dummyimage.com/200x100.png/cc0000/ffffff",
            description: "144Hz FHD Gaming Laptop: 13th Gen Intel Core i7, RTX 4070, 16GB DDR5, 1TB NVMe SSD, USB-Type C, Cooler Boost 5"
        },
        {
            id: 9,
            category: "gamer",
            title: "Acer Predator Helios 300",
            price: 2100,
            stock: 20,
            image: "https://dummyimage.com/200x100.png/5fa2dd/ffffff",
            description: "Intel i7-11800H, NVIDIA GeForce RTX 3060 GPU, 15.6 FHD 144Hz 3ms IPS Display"
        },
    
        {
            id: 10,
            category: "design",
            title: "MSI Cyborg",
            price: 1100,
            stock: 20,
            image: "https://dummyimage.com/200x100.png/cc0000/ffffff",
            description: "Intel i5-12450H, NVIDIA GEFORCE RTX 4050, 32GB 4800MHz DDR5 RAM 2TB PCIe SSD"
        },
        {
            id: 11,
            category: "design",
            title: "MSI Stealth 15M",
            price: 1500,
            stock: 20,
            image: "https://dummyimage.com/200x100.png/5fa2dd/ffffff",
            description: "144Hz FHD 1080p Display, Intel Core i7-11375H, NVIDIA GeForce RTX 3060, 16GB, 512GB SSD"
        },
        {
            id: 12,
            category: "gamer",
            title: "Acer Predator Triton 500",
            price: 1500,
            stock: 20,
            image: "https://dummyimage.com/200x100.png/cc0000/ffffff",
            description: "Intel i7-12700H, GeForce RTX 3060, 16 WQXGA 240Hz G-SYNC Display, 16GB DDR5"
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