const seedPhones = [
  // ==========================================
  // APPLE IPHONES
  // ==========================================
  {
    id: "iphone-16-pro-max",
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    slug: "apple-iphone-16-pro-max",
    tagline: "Grade 5 Titanium, Apple A18 Pro & Pro Camera System with 5x Tetraprism Zoom",
    releaseDate: "2024-09",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80",
    category: "Flagship",
    basePrice: 144900,
    originalPrice: 159900,
    discountPercentage: 9,
    specs: {
      processor: {
        name: "Apple A18 Pro",
        chipset: "3nm A18 Pro (6-Core CPU, 6-Core GPU, 16-Core Neural Engine)",
        nanometer: 3,
        cpuCores: 6,
        gpu: "Apple 6-Core GPU with Hardware Ray Tracing",
        antutuScore: 1985000,
        geekbenchSingle: 3420,
        geekbenchMulti: 8650,
        gamingFpsRating: "60-120 FPS Ultra High"
      },
      display: {
        sizeInch: 6.9,
        panelType: "Super Retina XDR OLED (LTPO)",
        resolution: "2868 x 1320 pixels (460 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 2000,
        protection: "Latest Generation Ceramic Shield",
        hdrSupport: "Dolby Vision, HDR10"
      },
      camera: {
        rearSummary: "48MP Fusion + 48MP Ultra-Wide + 12MP 5x Telephoto",
        mainMP: 48,
        mainSensor: "1/1.28\" Sony Custom Sensor, 2nd-gen Sensor-shift OIS",
        mainAperture: "f/1.78",
        hasOis: true,
        ultraWideMP: 48,
        ultraWideFov: 120,
        telephotoMP: 12,
        opticalZoom: "5x Optical Zoom (120mm)",
        frontMP: 12,
        videoCapabilities: "4K 120 fps Dolby Vision, ProRes Log, Spatial Video",
        dxomarkScore: 157
      },
      battery: {
        capacityMah: 4685,
        wiredChargingWatts: 30,
        wirelessChargingWatts: 25,
        chargingTimeMinutes: 70,
        batteryLifeHours: 29,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["8GB"],
        storageOptions: ["256GB", "512GB", "1TB"],
        expandableStorage: false
      },
      software: {
        osName: "iOS",
        osVersion: "iOS 18",
        promisedOsUpdatesYears: 6,
        promisedSecurityUpdatesYears: 7,
        uiSkin: "iOS with Apple Intelligence"
      },
      build: {
        weightGrams: 227,
        thicknessMm: 8.25,
        ipRating: "IP68 (6m up to 30 mins)",
        backMaterial: "Textured Matte Glass",
        frameMaterial: "Grade 5 Titanium"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 22,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 98,
      camera: 97,
      battery: 94,
      display: 96,
      valueForMoney: 75,
      mobiqIndex: 94
    },
    stores: [
      {
        storeName: "Amazon",
        price: 144900,
        originalPrice: 159900,
        inStock: true,
        dealBadge: "Lowest Price",
        bankOffers: ["Flat ₹4000 Instant Discount on ICICI Bank Cards", "No Cost EMI up to 12 months"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.8,
        ratingCount: 1420
      },
      {
        storeName: "Flipkart",
        price: 146900,
        originalPrice: 159900,
        inStock: true,
        dealBadge: "Exchange Bonus ₹5000",
        bankOffers: ["5% Cashback on Flipkart Axis Bank Card", "Extra ₹5000 off on Exchange"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.7,
        ratingCount: 980
      },
      {
        storeName: "Croma",
        price: 147900,
        originalPrice: 159900,
        inStock: true,
        dealBadge: "Store Pickup Today",
        bankOffers: ["₹3500 off on HDFC & SBI Credit Cards"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Croma_Logo.png",
        productUrl: "https://www.croma.com",
        rating: 4.7,
        ratingCount: 310
      }
    ],
    priceHistory: [
      { date: "2024-09-15", amazonPrice: 159900, flipkartPrice: 159900, cromaPrice: 159900, lowestPrice: 159900, event: "Launch" },
      { date: "2024-11-20", amazonPrice: 149900, flipkartPrice: 151900, cromaPrice: 152900, lowestPrice: 149900, event: "Black Friday" },
      { date: "2025-01-26", amazonPrice: 144900, flipkartPrice: 146900, cromaPrice: 147900, lowestPrice: 144900, event: "Republic Day Sale" }
    ],
    priceAnalysis: {
      allTimeLow: 144900,
      allTimeHigh: 159900,
      averagePrice: 151500,
      currentBestPrice: 144900,
      currentBestStore: "Amazon",
      priceDropAmount: 15000,
      priceStatus: "All-Time Low",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Current price is at its historical lowest ever with additional ₹4000 ICICI card discounts.",
      nextPredictedSale: "Summer Prime Days (Expected ₹1,42,900)"
    },
    pros: [
      "Benchmark-shattering Apple A18 Pro performance & Ray Tracing",
      "Huge 6.9\" bright LTPO OLED with minimal bezels",
      "Class-leading 4K 120fps Dolby Vision video recording",
      "Tremendous all-day battery endurance (up to 29h video)",
      "Premium, lightweight Grade 5 titanium chassis"
    ],
    cons: [
      "Very high price tag",
      "Charging speed capped at ~30W",
      "No charger included in box"
    ],
    targetAudience: ["Flagship Enthusiasts", "Pro Content Creators", "Apple Ecosystem Users"]
  },
  {
    id: "iphone-16",
    name: "Apple iPhone 16",
    brand: "Apple",
    slug: "apple-iphone-16",
    tagline: "Apple A18 Bionic, Camera Control Button, 48MP Fusion & Apple Intelligence Ready",
    releaseDate: "2024-09",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80",
    category: "Flagship",
    basePrice: 74900,
    originalPrice: 79900,
    discountPercentage: 6,
    specs: {
      processor: {
        name: "Apple A18",
        chipset: "3nm A18 (6-Core CPU, 5-Core GPU, 16-Core Neural Engine)",
        nanometer: 3,
        cpuCores: 6,
        gpu: "Apple 5-Core GPU",
        antutuScore: 1720000,
        geekbenchSingle: 3180,
        geekbenchMulti: 7850,
        gamingFpsRating: "60 FPS Ultra High"
      },
      display: {
        sizeInch: 6.1,
        panelType: "Super Retina XDR OLED (Dynamic Island)",
        resolution: "2556 x 1179 pixels (460 ppi)",
        refreshRateHz: 60,
        peakBrightnessNits: 2000,
        protection: "Latest Generation Ceramic Shield",
        hdrSupport: "Dolby Vision, HDR10"
      },
      camera: {
        rearSummary: "48MP Fusion OIS + 12MP Ultra-Wide Macro",
        mainMP: 48,
        mainSensor: "1/1.5\" Sony Custom Sensor, Sensor-shift OIS",
        mainAperture: "f/1.6",
        hasOis: true,
        ultraWideMP: 12,
        ultraWideFov: 120,
        telephotoMP: 0,
        opticalZoom: "2x In-sensor lossless crop",
        frontMP: 12,
        videoCapabilities: "4K 60fps Dolby Vision, Spatial Audio & Video",
        dxomarkScore: 147
      },
      battery: {
        capacityMah: 3561,
        wiredChargingWatts: 25,
        wirelessChargingWatts: 25,
        chargingTimeMinutes: 70,
        batteryLifeHours: 22,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["8GB"],
        storageOptions: ["128GB", "256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "iOS",
        osVersion: "iOS 18",
        promisedOsUpdatesYears: 6,
        promisedSecurityUpdatesYears: 7,
        uiSkin: "iOS with Apple Intelligence"
      },
      build: {
        weightGrams: 170,
        thicknessMm: 7.8,
        ipRating: "IP68 (6m depth up to 30 mins)",
        backMaterial: "Color-infused Textured Glass",
        frameMaterial: "Aerospace-grade Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 22,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 94,
      camera: 91,
      battery: 87,
      display: 89,
      valueForMoney: 88,
      mobiqIndex: 91
    },
    stores: [
      {
        storeName: "Amazon",
        price: 74900,
        originalPrice: 79900,
        inStock: true,
        dealBadge: "Lowest Price",
        bankOffers: ["Flat ₹5000 Instant Discount on ICICI Bank Cards", "No Cost EMI"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.7,
        ratingCount: 1890
      },
      {
        storeName: "Flipkart",
        price: 75900,
        originalPrice: 79900,
        inStock: true,
        dealBadge: "Exchange Bonus",
        bankOffers: ["5% Cashback with Flipkart Axis Card", "₹3000 Exchange Bonus"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.6,
        ratingCount: 1100
      }
    ],
    priceHistory: [
      { date: "2024-09-15", amazonPrice: 79900, flipkartPrice: 79900, cromaPrice: 79900, lowestPrice: 79900, event: "Launch" },
      { date: "2024-12-25", amazonPrice: 76900, flipkartPrice: 77900, cromaPrice: 78900, lowestPrice: 76900, event: "Holiday Deal" },
      { date: "2025-01-20", amazonPrice: 74900, flipkartPrice: 75900, cromaPrice: 76900, lowestPrice: 74900, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 74900,
      allTimeHigh: 79900,
      averagePrice: 77200,
      currentBestPrice: 74900,
      currentBestStore: "Amazon",
      priceDropAmount: 5000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Brand new 3nm A18 chip with Camera Control and 8GB RAM for Apple Intelligence.",
      nextPredictedSale: "Summer Fest (Expected ₹72,999)"
    },
    pros: [
      "Next-gen 3nm Apple A18 chipset with 8GB RAM standard",
      "Dedicated capacitive Camera Control button with tactile feedback",
      "Superb macro photography and 48MP spatial video capture",
      "Vibrant new saturated color options with frosted glass back"
    ],
    cons: [
      "Display refresh rate remains 60Hz",
      "No dedicated telephoto lens"
    ],
    targetAudience: ["Apple Upgraders", "Compact Phone Seekers", "Vloggers"]
  },
  {
    id: "apple-iphone-15",
    name: "Apple iPhone 15",
    brand: "Apple",
    slug: "apple-iphone-15",
    tagline: "Dynamic Island, 48MP Main Camera, Color-Infused Glass & USB-C",
    releaseDate: "2023-09",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80",
    category: "Flagship",
    basePrice: 58999,
    originalPrice: 79900,
    discountPercentage: 26,
    specs: {
      processor: {
        name: "Apple A16 Bionic",
        chipset: "4nm A16 Bionic (6-Core CPU, 5-Core GPU, 16-Core Neural Engine)",
        nanometer: 4,
        cpuCores: 6,
        gpu: "Apple 5-Core GPU",
        antutuScore: 1540000,
        geekbenchSingle: 2620,
        geekbenchMulti: 6680,
        gamingFpsRating: "60 FPS Stable"
      },
      display: {
        sizeInch: 6.1,
        panelType: "Super Retina XDR OLED (Dynamic Island)",
        resolution: "2556 x 1179 pixels (460 ppi)",
        refreshRateHz: 60,
        peakBrightnessNits: 2000,
        protection: "Ceramic Shield Front",
        hdrSupport: "Dolby Vision, HDR10"
      },
      camera: {
        rearSummary: "48MP Main + 12MP Ultra-Wide with 2x Telephoto Sensor Crop",
        mainMP: 48,
        mainSensor: "1/1.5\" Sony Custom Sensor, Sensor-shift OIS",
        mainAperture: "f/1.6",
        hasOis: true,
        ultraWideMP: 12,
        ultraWideFov: 120,
        telephotoMP: 0,
        opticalZoom: "2x Lossless Optical Quality Crop",
        frontMP: 12,
        videoCapabilities: "4K 60fps Dolby Vision, Cinematic Mode 4K 30fps",
        dxomarkScore: 145
      },
      battery: {
        capacityMah: 3349,
        wiredChargingWatts: 20,
        wirelessChargingWatts: 15,
        chargingTimeMinutes: 75,
        batteryLifeHours: 20,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["6GB"],
        storageOptions: ["128GB", "256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "iOS",
        osVersion: "iOS 18",
        promisedOsUpdatesYears: 5,
        promisedSecurityUpdatesYears: 6,
        uiSkin: "iOS"
      },
      build: {
        weightGrams: 171,
        thicknessMm: 7.8,
        ipRating: "IP68 (6m depth up to 30 mins)",
        backMaterial: "Color-infused Textured Matte Glass",
        frameMaterial: "Aerospace-grade Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 20,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 91,
      camera: 92,
      battery: 84,
      display: 88,
      valueForMoney: 94,
      mobiqIndex: 90
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 58999,
        originalPrice: 79900,
        inStock: true,
        dealBadge: "Lowest Price & Bank Discount",
        bankOffers: ["Flat ₹4000 off on HDFC & SBI Credit Cards", "Exchange bonus ₹3000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.7,
        ratingCount: 88500
      },
      {
        storeName: "Amazon",
        price: 59900,
        originalPrice: 79900,
        inStock: true,
        dealBadge: "Prime Delivery Deal",
        bankOffers: ["Flat ₹3500 Instant Discount on ICICI Bank Cards"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.7,
        ratingCount: 34000
      },
      {
        storeName: "Croma",
        price: 61990,
        originalPrice: 79900,
        inStock: true,
        dealBadge: "Store Pick Available",
        bankOffers: ["₹3000 Cashback with HDFC"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Croma_Logo.png",
        productUrl: "https://www.croma.com",
        rating: 4.6,
        ratingCount: 4200
      }
    ],
    priceHistory: [
      { date: "2023-09-22", amazonPrice: 79900, flipkartPrice: 79900, cromaPrice: 79900, lowestPrice: 79900, event: "Launch" },
      { date: "2024-03-10", amazonPrice: 71999, flipkartPrice: 70999, cromaPrice: 72999, lowestPrice: 70999, event: "Holi Fest" },
      { date: "2024-09-15", amazonPrice: 65999, flipkartPrice: 65999, cromaPrice: 66999, lowestPrice: 65999, event: "Post iPhone 16 Price Drop" },
      { date: "2024-10-10", amazonPrice: 57999, flipkartPrice: 54999, cromaPrice: 59999, lowestPrice: 54999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 59900, flipkartPrice: 58999, cromaPrice: 61990, lowestPrice: 58999, event: "Current Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 54999,
      allTimeHigh: 79900,
      averagePrice: 67200,
      currentBestPrice: 58999,
      currentBestStore: "Flipkart",
      priceDropAmount: 20901,
      priceStatus: "All-Time Low",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Steep ₹20,901 price cut from original launch price makes this the best value premium iPhone with USB-C.",
      nextPredictedSale: "Summer Bonanza (Expected ₹56,999)"
    },
    pros: [
      "Massive price drop makes it highest-value entry into Apple ecosystem",
      "Dynamic Island interface & standard USB-C port",
      "48MP main camera captures crisp, vivid 24MP photos",
      "Lightweight (171g) and compact ergonomic chassis"
    ],
    cons: [
      "Display is 60Hz instead of smooth 120Hz ProMotion",
      "Charging speed is capped at 20W"
    ],
    targetAudience: ["Apple Aspirants", "Compact Phone Lovers", "Social Media Creators"]
  },

  // ==========================================
  // SAMSUNG GALAXY
  // ==========================================
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    slug: "samsung-galaxy-s24-ultra",
    tagline: "Titanium Frame, Snapdragon 8 Gen 3 for Galaxy, S-Pen & 200MP Quad Zoom Camera",
    releaseDate: "2024-01",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
    category: "Flagship",
    basePrice: 119999,
    originalPrice: 134999,
    discountPercentage: 11,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8 Gen 3 for Galaxy",
        chipset: "4nm Octa-core (Cortex-X4 @ 3.39GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 750 (1000 MHz overclocked)",
        antutuScore: 1940000,
        geekbenchSingle: 2310,
        geekbenchMulti: 7180,
        gamingFpsRating: "60-120 FPS High/Ultra"
      },
      display: {
        sizeInch: 6.8,
        panelType: "Dynamic AMOLED 2X (LTPO flat)",
        resolution: "3120 x 1440 pixels (QHD+, 505 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 2600,
        protection: "Corning Gorilla Armor (Anti-reflective 75%)",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "200MP Main + 50MP 5x Periscope + 10MP 3x Telephoto + 12MP Ultra-Wide",
        mainMP: 200,
        mainSensor: "1/1.3\" ISOCELL HP2, Super Quad Pixel, OIS",
        mainAperture: "f/1.7",
        hasOis: true,
        ultraWideMP: 12,
        ultraWideFov: 120,
        telephotoMP: 50,
        opticalZoom: "5x Optical Zoom & 100x Space Zoom",
        frontMP: 12,
        videoCapabilities: "8K 30fps, 4K 120fps, 4K 60fps HDR10+",
        dxomarkScore: 153
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 45,
        wirelessChargingWatts: 15,
        chargingTimeMinutes: 62,
        batteryLifeHours: 26,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["12GB"],
        storageOptions: ["256GB", "512GB", "1TB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (One UI 6.1.1 with Galaxy AI)",
        promisedOsUpdatesYears: 7,
        promisedSecurityUpdatesYears: 7,
        uiSkin: "Samsung One UI with Galaxy AI"
      },
      build: {
        weightGrams: 232,
        thicknessMm: 8.6,
        ipRating: "IP68",
        backMaterial: "Gorilla Glass Victus 2",
        frameMaterial: "Titanium Armor"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 19,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 96,
      camera: 98,
      battery: 92,
      display: 99,
      valueForMoney: 82,
      mobiqIndex: 95
    },
    stores: [
      {
        storeName: "Amazon",
        price: 119999,
        originalPrice: 134999,
        inStock: true,
        dealBadge: "Lowest Price",
        bankOffers: ["Flat ₹8000 HDFC Bank Card Instant Discount", "No Cost EMI for 9 months"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.7,
        ratingCount: 2340
      },
      {
        storeName: "Flipkart",
        price: 122999,
        originalPrice: 134999,
        inStock: true,
        dealBadge: "Extra ₹6000 Exchange Bonus",
        bankOffers: ["5% Cashback on Axis Bank Card", "₹6000 Extra on old phone exchange"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.6,
        ratingCount: 1890
      },
      {
        storeName: "Official Store",
        price: 124999,
        originalPrice: 134999,
        inStock: true,
        dealBadge: "Free Galaxy Watch 4 Deal",
        bankOffers: ["₹8000 HDFC Card Instant Discount", "Samsung Rewards 3%"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
        productUrl: "https://www.samsung.com",
        rating: 4.8,
        ratingCount: 3100
      }
    ],
    priceHistory: [
      { date: "2024-01-20", amazonPrice: 134999, flipkartPrice: 134999, cromaPrice: 134999, lowestPrice: 134999, event: "Launch" },
      { date: "2024-07-20", amazonPrice: 124999, flipkartPrice: 126999, cromaPrice: 127999, lowestPrice: 124999, event: "Prime Day" },
      { date: "2025-01-20", amazonPrice: 119999, flipkartPrice: 122999, cromaPrice: 123999, lowestPrice: 119999, event: "Republic Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 118499,
      allTimeHigh: 134999,
      averagePrice: 126000,
      currentBestPrice: 119999,
      currentBestStore: "Amazon",
      priceDropAmount: 15000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "GOOD TIME TO BUY",
      verdictReason: "Sitting near all-time low with ₹8,000 instant bank rebate and 7 full years of Android OS support guaranteed.",
      nextPredictedSale: "Holi Clearance (Expected ₹1,16,999)"
    },
    pros: [
      "Gorilla Armor anti-glare display panel (best visibility outdoors)",
      "Versatile 200MP + 5x/10x optical zoom camera system",
      "Built-in S-Pen stylus for productivity & drawing",
      "7 guaranteed years of major Android OS and security upgrades"
    ],
    cons: [
      "Large and boxy rectangular corners",
      "45W charging is slower than rivals"
    ],
    targetAudience: ["Android Power Users", "Business & S-Pen Fans", "Zoom Photographers"]
  },
  {
    id: "samsung-galaxy-s24-fe",
    name: "Samsung Galaxy S24 FE 5G",
    brand: "Samsung",
    slug: "samsung-galaxy-s24-fe",
    tagline: "Exynos 2400e (4nm), 6.7\" Dynamic AMOLED 2X, Galaxy AI & 7 Years OS Updates",
    releaseDate: "2024-10",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 54999,
    originalPrice: 59999,
    discountPercentage: 8,
    specs: {
      processor: {
        name: "Samsung Exynos 2400e (4nm)",
        chipset: "4nm 10-core Deca-core CPU (Cortex-X4 @ 3.11GHz)",
        nanometer: 4,
        cpuCores: 10,
        gpu: "Samsung Xclipse 940 (AMD RDNA 3)",
        antutuScore: 1650000,
        geekbenchSingle: 2040,
        geekbenchMulti: 6420,
        gamingFpsRating: "60-90 FPS High"
      },
      display: {
        sizeInch: 6.7,
        panelType: "Dynamic AMOLED 2X (120Hz)",
        resolution: "2340 x 1080 pixels (FHD+, 385 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 1900,
        protection: "Corning Gorilla Glass Victus+",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP Dual Pixel OIS + 8MP 3x Telephoto OIS + 12MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.57\" ISOCELL GN3 with OIS",
        mainAperture: "f/1.8",
        hasOis: true,
        ultraWideMP: 12,
        ultraWideFov: 123,
        telephotoMP: 8,
        opticalZoom: "3x Optical Zoom with OIS & 30x Space Zoom",
        frontMP: 10,
        videoCapabilities: "8K 30fps, 4K 60fps, Super Steady Video",
        dxomarkScore: 137
      },
      battery: {
        capacityMah: 4700,
        wiredChargingWatts: 25,
        wirelessChargingWatts: 15,
        chargingTimeMinutes: 70,
        batteryLifeHours: 24,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["8GB"],
        storageOptions: ["128GB", "256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (One UI 6.1.1 with Galaxy AI)",
        promisedOsUpdatesYears: 7,
        promisedSecurityUpdatesYears: 7,
        uiSkin: "Samsung One UI"
      },
      build: {
        weightGrams: 213,
        thicknessMm: 8.0,
        ipRating: "IP68 (Waterproof)",
        backMaterial: "Gorilla Glass Victus+",
        frameMaterial: "Armor Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 18,
        wifiVersion: "Wi-Fi 6E",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 91,
      camera: 89,
      battery: 88,
      display: 92,
      valueForMoney: 93,
      mobiqIndex: 91
    },
    stores: [
      {
        storeName: "Amazon",
        price: 54999,
        originalPrice: 59999,
        inStock: true,
        dealBadge: "Lowest Price & Bank Rebate",
        bankOffers: ["Flat ₹4000 Instant Discount on HDFC Cards"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.5,
        ratingCount: 890
      },
      {
        storeName: "Flipkart",
        price: 56999,
        originalPrice: 59999,
        inStock: true,
        dealBadge: "Exchange Offer",
        bankOffers: ["₹3000 off with Axis Bank Card"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 650
      }
    ],
    priceHistory: [
      { date: "2024-10-04", amazonPrice: 59999, flipkartPrice: 59999, cromaPrice: 59999, lowestPrice: 59999, event: "Launch" },
      { date: "2025-01-20", amazonPrice: 54999, flipkartPrice: 56999, cromaPrice: 57999, lowestPrice: 54999, event: "Current Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 54999,
      allTimeHigh: 59999,
      averagePrice: 57500,
      currentBestPrice: 54999,
      currentBestStore: "Amazon",
      priceDropAmount: 5000,
      priceStatus: "All-Time Low",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Full flagship-tier Galaxy AI suite, 3x optical zoom, IP68 water resistance, and 7 years of Android upgrades under ₹55k.",
      nextPredictedSale: "Spring Fest (Expected ₹52,999)"
    },
    pros: [
      "Industry-leading 7 full years of Android OS and security upgrades",
      "Complete suite of Galaxy AI tools (Circle to Search, Live Translate)",
      "Dedicated 8MP 3x optical telephoto camera with OIS",
      "Premium Gorilla Glass Victus+ front and back with IP68 rating"
    ],
    cons: [
      "Charging speed capped at 25W with no charger in box",
      "Bezels are slightly thicker than S24 Plus"
    ],
    targetAudience: ["Samsung Fans", "Long-term Keepers", "Galaxy AI Enthusiasts"]
  },
  {
    id: "samsung-galaxy-a55-5g",
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    slug: "samsung-galaxy-a55-5g",
    tagline: "Metal Frame, Gorilla Glass Victus+, 50MP OIS, Knox Security & 4 Years OS",
    releaseDate: "2024-03",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 35999,
    originalPrice: 39999,
    discountPercentage: 10,
    specs: {
      processor: {
        name: "Samsung Exynos 1480 (4nm)",
        chipset: "4nm Octa-core with AMD Xclipse 530 GPU",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Xclipse 530 (AMD RDNA 2)",
        antutuScore: 735000,
        geekbenchSingle: 1160,
        geekbenchMulti: 3500,
        gamingFpsRating: "60 FPS Smooth"
      },
      display: {
        sizeInch: 6.6,
        panelType: "Super AMOLED (120Hz Vision Booster)",
        resolution: "2340 x 1080 pixels (FHD+, 390 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 1000,
        protection: "Corning Gorilla Glass Victus+",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP OIS Main + 12MP Ultra-Wide + 5MP Macro",
        mainMP: 50,
        mainSensor: "1/1.56\" Sony IMX906 with OIS & VDIS",
        mainAperture: "f/1.8",
        hasOis: true,
        ultraWideMP: 12,
        ultraWideFov: 123,
        telephotoMP: 0,
        opticalZoom: "None (2x in-sensor)",
        frontMP: 32,
        videoCapabilities: "4K 30fps with Super HDR 12-bit video",
        dxomarkScore: 128
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 25,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 80,
        batteryLifeHours: 27,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["128GB", "256GB"],
        expandableStorage: true
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (One UI 6.1)",
        promisedOsUpdatesYears: 4,
        promisedSecurityUpdatesYears: 5,
        uiSkin: "One UI with Knox Vault"
      },
      build: {
        weightGrams: 213,
        thicknessMm: 8.2,
        ipRating: "IP67 (Water & Dust Resistant)",
        backMaterial: "Gorilla Glass Victus+",
        frameMaterial: "Brushed Aluminum Metal"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 12,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 82,
      camera: 87,
      battery: 92,
      display: 88,
      valueForMoney: 90,
      mobiqIndex: 88
    },
    stores: [
      {
        storeName: "Amazon",
        price: 35999,
        originalPrice: 39999,
        inStock: true,
        dealBadge: "Lowest Price",
        bankOffers: ["Flat ₹3000 Instant Discount with HDFC Cards", "No Cost EMI"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.4,
        ratingCount: 3200
      },
      {
        storeName: "Flipkart",
        price: 36999,
        originalPrice: 39999,
        inStock: true,
        dealBadge: "Bank Offer",
        bankOffers: ["₹2000 off on Axis Bank Cards"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.4,
        ratingCount: 4100
      }
    ],
    priceHistory: [
      { date: "2024-03-14", amazonPrice: 39999, flipkartPrice: 39999, cromaPrice: 39999, lowestPrice: 39999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 36999, flipkartPrice: 34999, cromaPrice: 37999, lowestPrice: 34999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 35999, flipkartPrice: 36999, cromaPrice: 37999, lowestPrice: 35999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 34999,
      allTimeHigh: 39999,
      averagePrice: 37200,
      currentBestPrice: 35999,
      currentBestStore: "Amazon",
      priceDropAmount: 4000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "GOOD TIME TO BUY",
      verdictReason: "Premium metal & glass build with IP67 waterproofing and Samsung Knox Vault security.",
      nextPredictedSale: "Spring Clearance (Expected ₹34,499)"
    },
    pros: [
      "Top-tier build quality with solid brushed metal frame & Gorilla Glass Victus+",
      "IP67 water and dust resistance",
      "MicroSD card expansion support up to 1TB",
      "Samsung Knox Vault hardware security chip"
    ],
    cons: [
      "25W charging takes over an hour with no charger in box",
      "Slightly heavy at 213 grams"
    ],
    targetAudience: ["Durability Seekers", "Samsung Fans", "Security Conscious Users"]
  },

  // ==========================================
  // ONEPLUS
  // ==========================================
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    slug: "oneplus-12",
    tagline: "Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera, 2K 120Hz ProXDR & 100W Flash Charge",
    releaseDate: "2024-01",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
    category: "Flagship",
    basePrice: 59999,
    originalPrice: 64999,
    discountPercentage: 8,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8 Gen 3",
        chipset: "4nm Octa-core (Cortex-X4 @ 3.30GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 750",
        antutuScore: 1910000,
        geekbenchSingle: 2240,
        geekbenchMulti: 6920,
        gamingFpsRating: "90-120 FPS High Stability"
      },
      display: {
        sizeInch: 6.82,
        panelType: "2K LTPO AMOLED (ProXDR with Aqua Touch)",
        resolution: "3168 x 1440 pixels (510 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 4500,
        protection: "Corning Gorilla Glass Victus 2",
        hdrSupport: "Dolby Vision, HDR10+"
      },
      camera: {
        rearSummary: "50MP Sony LYT-808 + 64MP 3x Periscope + 48MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.4\" Sony LYT-808, OIS, ALC anti-glare coating",
        mainAperture: "f/1.6",
        hasOis: true,
        ultraWideMP: 48,
        ultraWideFov: 114,
        telephotoMP: 64,
        opticalZoom: "3x Optical Zoom & 120x Digital Zoom",
        frontMP: 32,
        videoCapabilities: "8K 24fps, 4K 60fps Dolby Vision",
        dxomarkScore: 146
      },
      battery: {
        capacityMah: 5400,
        wiredChargingWatts: 100,
        wirelessChargingWatts: 50,
        chargingTimeMinutes: 26,
        batteryLifeHours: 28,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["12GB", "16GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (OxygenOS 14/15)",
        promisedOsUpdatesYears: 4,
        promisedSecurityUpdatesYears: 5,
        uiSkin: "OxygenOS"
      },
      build: {
        weightGrams: 220,
        thicknessMm: 9.15,
        ipRating: "IP65 (Splash & Rain proof)",
        backMaterial: "Gorilla Glass Victus",
        frameMaterial: "Aluminum Alloy"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 16,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 95,
      camera: 91,
      battery: 97,
      display: 96,
      valueForMoney: 94,
      mobiqIndex: 94
    },
    stores: [
      {
        storeName: "Amazon",
        price: 59999,
        originalPrice: 64999,
        inStock: true,
        dealBadge: "Lowest Price & 100W in Box",
        bankOffers: ["Flat ₹5000 Instant Discount on ICICI Bank Cards", "No Cost EMI up to 6 months"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.6,
        ratingCount: 3820
      },
      {
        storeName: "Flipkart",
        price: 61999,
        originalPrice: 64999,
        inStock: true,
        dealBadge: "Instant Bank Discount",
        bankOffers: ["₹3000 Off with SBI Cards"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 1400
      }
    ],
    priceHistory: [
      { date: "2024-01-24", amazonPrice: 64999, flipkartPrice: 64999, cromaPrice: 64999, lowestPrice: 64999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 58999, flipkartPrice: 59999, cromaPrice: 61999, lowestPrice: 58999, event: "Great Indian Festival" },
      { date: "2025-01-20", amazonPrice: 59999, flipkartPrice: 61999, cromaPrice: 61999, lowestPrice: 59999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 57999,
      allTimeHigh: 64999,
      averagePrice: 61500,
      currentBestPrice: 59999,
      currentBestStore: "Amazon",
      priceDropAmount: 5000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "GOOD TIME TO BUY",
      verdictReason: "Offers unmatched value in the premium segment with 100W fast charger and 5400mAh battery included.",
      nextPredictedSale: "Spring Tech Fest (Expected ₹58,499)"
    },
    pros: [
      "Stupendous 5400mAh battery with 100W wired & 50W wireless charging",
      "100W fast charger & cable provided right inside the box",
      "Stunning 4500-nit 2K display with Aqua Touch wet-finger technology",
      "Flagship Snapdragon 8 Gen 3 with dual cryo-velocity vapor chamber cooling"
    ],
    cons: [
      "IP65 rating instead of full IP68 submersible waterproof",
      "Slightly thick and bulky in hand (9.15mm / 220g)"
    ],
    targetAudience: ["Value Flagship Seekers", "Power Gamers", "Fast Charging Devotees"]
  },
  {
    id: "oneplus-12r",
    name: "OnePlus 12R 5G",
    brand: "OnePlus",
    slug: "oneplus-12r",
    tagline: "Snapdragon 8 Gen 2, 5500mAh Monster Battery, 1.5K 120Hz 4th Gen LTPO & 100W SuperVOOC",
    releaseDate: "2024-02",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 35999,
    originalPrice: 39999,
    discountPercentage: 10,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8 Gen 2",
        chipset: "4nm TSMC (Cortex-X3 @ 3.20GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 740",
        antutuScore: 1510000,
        geekbenchSingle: 1940,
        geekbenchMulti: 5320,
        gamingFpsRating: "90 FPS Ultra in BGMI & CoD"
      },
      display: {
        sizeInch: 6.78,
        panelType: "1.5K 4th Gen LTPO AMOLED",
        resolution: "2780 x 1264 pixels (450 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 4500,
        protection: "Corning Gorilla Glass Victus 2",
        hdrSupport: "Dolby Vision, HDR10+"
      },
      camera: {
        rearSummary: "50MP Sony IMX890 OIS + 8MP Ultra-Wide + 2MP Macro",
        mainMP: 50,
        mainSensor: "1/1.56\" Sony IMX890 with OIS",
        mainAperture: "f/1.8",
        hasOis: true,
        ultraWideMP: 8,
        ultraWideFov: 112,
        telephotoMP: 0,
        opticalZoom: "None (2x crop)",
        frontMP: 16,
        videoCapabilities: "4K 60fps, 1080p 240fps slow-mo",
        dxomarkScore: 130
      },
      battery: {
        capacityMah: 5500,
        wiredChargingWatts: 100,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 26,
        batteryLifeHours: 30,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "16GB"],
        storageOptions: ["128GB", "256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (OxygenOS 14/15)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "OxygenOS"
      },
      build: {
        weightGrams: 207,
        thicknessMm: 8.8,
        ipRating: "IP64",
        backMaterial: "Gorilla Glass 5",
        frameMaterial: "Matte Aluminum Frame"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 15,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 93,
      camera: 85,
      battery: 99,
      display: 96,
      valueForMoney: 97,
      mobiqIndex: 93
    },
    stores: [
      {
        storeName: "Amazon",
        price: 35999,
        originalPrice: 39999,
        inStock: true,
        dealBadge: "Lowest Price & 100W in Box",
        bankOffers: ["Flat ₹3000 Instant Discount on ICICI Bank Cards", "No Cost EMI"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.6,
        ratingCount: 12400
      },
      {
        storeName: "Flipkart",
        price: 37999,
        originalPrice: 39999,
        inStock: true,
        dealBadge: "Bank Discount",
        bankOffers: ["₹2000 off on Bank Cards"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 3800
      }
    ],
    priceHistory: [
      { date: "2024-02-06", amazonPrice: 39999, flipkartPrice: 39999, cromaPrice: 39999, lowestPrice: 39999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 34999, flipkartPrice: 35999, cromaPrice: 36999, lowestPrice: 34999, event: "Great Indian Festival" },
      { date: "2025-01-20", amazonPrice: 35999, flipkartPrice: 37999, cromaPrice: 38999, lowestPrice: 35999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 34999,
      allTimeHigh: 39999,
      averagePrice: 37400,
      currentBestPrice: 35999,
      currentBestStore: "Amazon",
      priceDropAmount: 4000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Record-breaking 5500mAh battery life and flagship Snapdragon 8 Gen 2 under ₹36k.",
      nextPredictedSale: "Summer Rush (Expected ₹33,999)"
    },
    pros: [
      "Gigantic 5500mAh battery delivers easily 2 days of battery backup",
      "Included 100W SuperVOOC charger recharges battery 0-100% in 26 minutes",
      "Superb 4500-nit 4th Gen LTPO AMOLED with Aqua Touch",
      "Proven flagship Snapdragon 8 Gen 2 performance"
    ],
    cons: [
      "Auxiliary cameras (8MP ultra-wide and 2MP macro) are average",
      "No wireless charging support"
    ],
    targetAudience: ["Gamers under 40k", "Heavy Battery Users", "OnePlus Fans"]
  },
  {
    id: "oneplus-nord-4",
    name: "OnePlus Nord 4 5G",
    brand: "OnePlus",
    slug: "oneplus-nord-4",
    tagline: "All-Metal Unibody, Snapdragon 7+ Gen 3, 5500mAh Battery & 6 Years Updates",
    releaseDate: "2024-07",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 29999,
    originalPrice: 32999,
    discountPercentage: 9,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 7+ Gen 3",
        chipset: "4nm TSMC (Cortex-X4 @ 2.8GHz, flagship architecture)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 732",
        antutuScore: 1420000,
        geekbenchSingle: 1890,
        geekbenchMulti: 4850,
        gamingFpsRating: "90 FPS Ultra Stable"
      },
      display: {
        sizeInch: 6.74,
        panelType: "1.5K Super Fluid AMOLED (120Hz)",
        resolution: "2772 x 1240 pixels (450 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 2150,
        protection: "Corning Gorilla Glass 5",
        hdrSupport: "HDR10+, Ultra HDR"
      },
      camera: {
        rearSummary: "50MP Sony LYT-600 OIS + 8MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.95\" Sony LYT-600 with OIS",
        mainAperture: "f/1.8",
        hasOis: true,
        ultraWideMP: 8,
        ultraWideFov: 112,
        telephotoMP: 0,
        opticalZoom: "None (2x in-sensor)",
        frontMP: 16,
        videoCapabilities: "4K 60fps, 1080p 120fps",
        dxomarkScore: 126
      },
      battery: {
        capacityMah: 5500,
        wiredChargingWatts: 100,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 28,
        batteryLifeHours: 29,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["128GB", "256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (OxygenOS 14.1)",
        promisedOsUpdatesYears: 4,
        promisedSecurityUpdatesYears: 6,
        uiSkin: "OxygenOS (Clean & Fast)"
      },
      build: {
        weightGrams: 199,
        thicknessMm: 7.99,
        ipRating: "IP65",
        backMaterial: "Aerospace-grade Aluminum Unibody",
        frameMaterial: "Solid CNC Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 15,
        wifiVersion: "Wi-Fi 6E",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 92,
      camera: 84,
      battery: 97,
      display: 92,
      valueForMoney: 96,
      mobiqIndex: 92
    },
    stores: [
      {
        storeName: "Amazon",
        price: 29999,
        originalPrice: 32999,
        inStock: true,
        dealBadge: "Lowest Price & 100W in Box",
        bankOffers: ["Flat ₹2000 ICICI Instant Discount", "No Cost EMI"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.5,
        ratingCount: 8400
      }
    ],
    priceHistory: [
      { date: "2024-07-20", amazonPrice: 32999, flipkartPrice: 32999, cromaPrice: 32999, lowestPrice: 32999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 28999, flipkartPrice: 29999, cromaPrice: 30999, lowestPrice: 28999, event: "Great Indian Festival" },
      { date: "2025-01-20", amazonPrice: 29999, flipkartPrice: 30999, cromaPrice: 31999, lowestPrice: 29999, event: "Current Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 27999,
      allTimeHigh: 32999,
      averagePrice: 30500,
      currentBestPrice: 29999,
      currentBestStore: "Amazon",
      priceDropAmount: 3000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Unique premium metal unibody design with massive 5500mAh battery and 6 full years of software support.",
      nextPredictedSale: "Summer Rush (Expected ₹28,999)"
    },
    pros: [
      "Ultra-durable full metal unibody build",
      "Massive 5500mAh battery paired with 100W fast charging",
      "Near-flagship Snapdragon 7+ Gen 3 CPU performance",
      "Industry-leading 6 years of software security support"
    ],
    cons: [
      "No dedicated telephoto lens",
      "Ultra-wide camera is basic 8MP"
    ],
    targetAudience: ["All-Rounders", "Durability Seekers", "Battery Life Kings"]
  },

  // ==========================================
  // GOOGLE PIXEL
  // ==========================================
  {
    id: "google-pixel-9-pro-xl",
    name: "Google Pixel 9 Pro XL",
    brand: "Google",
    slug: "google-pixel-9-pro-xl",
    tagline: "Google Tensor G4, Gemini AI Built-in, Super Actua Display & 7 Years of Pixel Drops",
    releaseDate: "2024-08",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
    category: "Flagship",
    basePrice: 124999,
    originalPrice: 124999,
    discountPercentage: 0,
    specs: {
      processor: {
        name: "Google Tensor G4",
        chipset: "4nm Octa-core (with Titan M2 Security Coprocessor)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Mali-G715 MC7",
        antutuScore: 1320000,
        geekbenchSingle: 1980,
        geekbenchMulti: 4950,
        gamingFpsRating: "60 FPS Stable"
      },
      display: {
        sizeInch: 6.8,
        panelType: "Super Actua OLED (LTPO)",
        resolution: "2992 x 1344 pixels (486 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 3000,
        protection: "Corning Gorilla Glass Victus 2",
        hdrSupport: "HDR10+, Ultra HDR"
      },
      camera: {
        rearSummary: "50MP Octa PD Main + 48MP Quad PD Ultra-Wide + 48MP 5x Telephoto",
        mainMP: 50,
        mainSensor: "1/1.31\" Samsung GNK sensor, OIS + EIS",
        mainAperture: "f/1.68",
        hasOis: true,
        ultraWideMP: 48,
        ultraWideFov: 123,
        telephotoMP: 48,
        opticalZoom: "5x Optical Zoom & 30x Super Res Zoom",
        frontMP: 42,
        videoCapabilities: "8K 30fps Video Boost, 4K 60fps Night Sight Video",
        dxomarkScore: 158
      },
      battery: {
        capacityMah: 5060,
        wiredChargingWatts: 37,
        wirelessChargingWatts: 23,
        chargingTimeMinutes: 65,
        batteryLifeHours: 25,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["16GB"],
        storageOptions: ["128GB", "256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 / 15 (Pixel Pure Experience)",
        promisedOsUpdatesYears: 7,
        promisedSecurityUpdatesYears: 7,
        uiSkin: "Pure Google Pixel UI"
      },
      build: {
        weightGrams: 221,
        thicknessMm: 8.5,
        ipRating: "IP68",
        backMaterial: "Silky Matte Glass",
        frameMaterial: "Polished Aerospace-grade Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 24,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 88,
      camera: 99,
      battery: 89,
      display: 97,
      valueForMoney: 78,
      mobiqIndex: 92
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 124999,
        originalPrice: 124999,
        inStock: true,
        dealBadge: "Official Retailer & Bank Offer",
        bankOffers: ["₹10,000 Instant Discount on ICICI Bank Cards", "1 Year Google One AI Premium 2TB Free"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.7,
        ratingCount: 780
      }
    ],
    priceHistory: [
      { date: "2024-08-20", amazonPrice: 124999, flipkartPrice: 124999, cromaPrice: 124999, lowestPrice: 124999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 124999, flipkartPrice: 114999, cromaPrice: 119999, lowestPrice: 114999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 124999, flipkartPrice: 124999, cromaPrice: 124999, lowestPrice: 124999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 114999,
      allTimeHigh: 124999,
      averagePrice: 122000,
      currentBestPrice: 124999,
      currentBestStore: "Flipkart",
      priceDropAmount: 0,
      priceStatus: "Average",
      timeToBuyVerdict: "WAIT FOR SALE",
      verdictReason: "Look out for regular ₹10,000 bank card instant discounts before purchasing at full MSRP.",
      nextPredictedSale: "Summer Flash Drop (Expected ₹1,12,000)"
    },
    pros: [
      "Top-tier computational photography, Video Boost & Night Sight",
      "7 full years of guaranteed OS updates and monthly Feature Drops",
      "Deeply integrated Google Gemini Nano AI with 16GB RAM standard",
      "Brilliant 3000-nit Super Actua display with silky uniform bezels"
    ],
    cons: [
      "Tensor G4 raw benchmark power lags in intense long gaming sessions",
      "Moderate 37W charging speed with no charger in box"
    ],
    targetAudience: ["Photography Enthusiasts", "Pure Android Purists", "AI Enthusiasts"]
  },
  {
    id: "google-pixel-8a",
    name: "Google Pixel 8a 5G",
    brand: "Google",
    slug: "google-pixel-8a",
    tagline: "Google Tensor G3, AI Best Take & Magic Audio Eraser, 120Hz Actua & 7 Yrs Updates",
    releaseDate: "2024-05",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 39999,
    originalPrice: 52999,
    discountPercentage: 25,
    specs: {
      processor: {
        name: "Google Tensor G3",
        chipset: "4nm Non-core CPU with Titan M2 Coprocessor",
        nanometer: 4,
        cpuCores: 9,
        gpu: "Immortalis-G715s MC10",
        antutuScore: 1180000,
        geekbenchSingle: 1720,
        geekbenchMulti: 4410,
        gamingFpsRating: "60 FPS Stable"
      },
      display: {
        sizeInch: 6.1,
        panelType: "Actua OLED (120Hz)",
        resolution: "2400 x 1080 pixels (FHD+, 430 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 2000,
        protection: "Corning Gorilla Glass 3",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "64MP Quad PD Main OIS + 13MP Ultra-Wide",
        mainMP: 64,
        mainSensor: "1/1.73\" Sony sensor, OIS + EIS",
        mainAperture: "f/1.89",
        hasOis: true,
        ultraWideMP: 13,
        ultraWideFov: 120,
        telephotoMP: 0,
        opticalZoom: "None (Super Res Zoom up to 8x)",
        frontMP: 13,
        videoCapabilities: "4K 60fps with Cinematic Pan",
        dxomarkScore: 144
      },
      battery: {
        capacityMah: 4492,
        wiredChargingWatts: 18,
        wirelessChargingWatts: 7.5,
        chargingTimeMinutes: 85,
        batteryLifeHours: 24,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["8GB"],
        storageOptions: ["128GB", "256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Stock Pixel Experience)",
        promisedOsUpdatesYears: 7,
        promisedSecurityUpdatesYears: 7,
        uiSkin: "Pure Google Pixel UI"
      },
      build: {
        weightGrams: 188,
        thicknessMm: 8.9,
        ipRating: "IP67 (Water-resistant)",
        backMaterial: "Matte Composite Plastic with Satin Aluminum Frame",
        frameMaterial: "Matte Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 20,
        wifiVersion: "Wi-Fi 6E",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 85,
      camera: 96,
      battery: 83,
      display: 91,
      valueForMoney: 95,
      mobiqIndex: 90
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 39999,
        originalPrice: 52999,
        inStock: true,
        dealBadge: "Lowest Price Ever",
        bankOffers: ["Flat ₹4000 Instant Discount with SBI & ICICI Cards", "Exchange Bonus ₹3000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 14500
      }
    ],
    priceHistory: [
      { date: "2024-05-14", amazonPrice: 52999, flipkartPrice: 52999, cromaPrice: 52999, lowestPrice: 52999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 42999, flipkartPrice: 37999, cromaPrice: 43999, lowestPrice: 37999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 44999, flipkartPrice: 39999, cromaPrice: 44999, lowestPrice: 39999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 37999,
      allTimeHigh: 52999,
      averagePrice: 43800,
      currentBestPrice: 39999,
      currentBestStore: "Flipkart",
      priceDropAmount: 13000,
      priceStatus: "All-Time Low",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Best camera phone under ₹40k with Google AI tools and 7 full years of software updates.",
      nextPredictedSale: "Summer Flash Deal (Expected ₹38,499)"
    },
    pros: [
      "Unrivaled computational point-and-shoot camera quality under ₹40k",
      "7 full years of major Android OS upgrades and Feature Drops",
      "Smooth 120Hz bright Actua OLED display",
      "Compact ergonomic hand feel with rounded matte corners"
    ],
    cons: [
      "Slow 18W wired charging speed",
      "Noticeable bezels around the display"
    ],
    targetAudience: ["Camera Lovers under 40k", "Compact Phone Fans", "Pure Android Fans"]
  },

  // ==========================================
  // IQOO (PERFORMANCE & GAMING)
  // ==========================================
  {
    id: "iqoo-12-5g",
    name: "iQOO 12 5G",
    brand: "iQOO",
    slug: "iqoo-12-5g",
    tagline: "Snapdragon 8 Gen 3, Q1 SuperComputing Chip, 144Hz AMOLED & 120W FlashCharge",
    releaseDate: "2023-12",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    category: "Gaming",
    basePrice: 52999,
    originalPrice: 59999,
    discountPercentage: 12,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8 Gen 3 + Q1 Chip",
        chipset: "4nm Octa-core (Cortex-X4 @ 3.30GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 750 + Q1 Frame Interpolation Chip",
        antutuScore: 2050000,
        geekbenchSingle: 2260,
        geekbenchMulti: 7010,
        gamingFpsRating: "144 FPS Gaming Interpolation"
      },
      display: {
        sizeInch: 6.78,
        panelType: "1.5K LTPO AMOLED (144Hz)",
        resolution: "2800 x 1260 pixels (452 ppi)",
        refreshRateHz: 144,
        peakBrightnessNits: 3000,
        protection: "Schott Xensation Alpha",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP OV50H (1/1.3\") + 50MP Ultra-Wide + 64MP 3x Periscope Telephoto",
        mainMP: 50,
        mainSensor: "1/1.3\" OV50H Custom Sensor with OIS",
        mainAperture: "f/1.68",
        hasOis: true,
        ultraWideMP: 50,
        ultraWideFov: 119,
        telephotoMP: 64,
        opticalZoom: "3x Optical Zoom & 100x Digital Zoom",
        frontMP: 16,
        videoCapabilities: "8K 30fps, 4K 60fps",
        dxomarkScore: 142
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 120,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 26,
        batteryLifeHours: 25,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["12GB", "16GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Funtouch OS 14/15)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "Funtouch OS"
      },
      build: {
        weightGrams: 203,
        thicknessMm: 8.1,
        ipRating: "IP64 (Splash Resistant)",
        backMaterial: "BMW M Motorsport AG Glass",
        frameMaterial: "Aviation-grade Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 17,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 99,
      camera: 90,
      battery: 93,
      display: 95,
      valueForMoney: 96,
      mobiqIndex: 95
    },
    stores: [
      {
        storeName: "Amazon",
        price: 52999,
        originalPrice: 59999,
        inStock: true,
        dealBadge: "Lowest Price & 120W Charger",
        bankOffers: ["Flat ₹3000 Instant Discount on HDFC & ICICI Cards", "6 Months No Cost EMI"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.6,
        ratingCount: 3100
      },
      {
        storeName: "Flipkart",
        price: 54999,
        originalPrice: 59999,
        inStock: true,
        dealBadge: "Exchange Offers",
        bankOffers: ["₹2000 off on Bank Cards"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 920
      }
    ],
    priceHistory: [
      { date: "2023-12-14", amazonPrice: 59999, flipkartPrice: 59999, cromaPrice: 59999, lowestPrice: 59999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 49999, flipkartPrice: 52999, cromaPrice: 53999, lowestPrice: 49999, event: "Great Indian Festival" },
      { date: "2025-01-20", amazonPrice: 52999, flipkartPrice: 54999, cromaPrice: 54999, lowestPrice: 52999, event: "Current Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 48999,
      allTimeHigh: 59999,
      averagePrice: 53800,
      currentBestPrice: 52999,
      currentBestStore: "Amazon",
      priceDropAmount: 7000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "GOOD TIME TO BUY",
      verdictReason: "Highest AnTuTu score (2,050,000+) in the sub-₹55k price bracket with 64MP periscope telephoto.",
      nextPredictedSale: "Gamer Fest (Expected ₹49,999)"
    },
    pros: [
      "Top-tier Snapdragon 8 Gen 3 performance topping over 2M AnTuTu score",
      "Dedicated Q1 chip enables 144 FPS game interpolation in BGMI & Genshin",
      "Flagship-grade 64MP 3x periscope zoom lens",
      "Blazing 120W FlashCharge (0-100% in ~26 minutes) with brick included"
    ],
    cons: [
      "No wireless charging support",
      "Funtouch OS UI design has mixed opinions compared to Stock/OneUI"
    ],
    targetAudience: ["Competitive Mobile Gamers", "Performance Seekers"]
  },
  {
    id: "iqoo-neo-9-pro",
    name: "iQOO Neo 9 Pro 5G",
    brand: "iQOO",
    slug: "iqoo-neo-9-pro",
    tagline: "Snapdragon 8 Gen 2, Supercomputing Chip Q1, 144Hz AMOLED & 120W FlashCharge",
    releaseDate: "2024-02",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    category: "Gaming",
    basePrice: 35999,
    originalPrice: 39999,
    discountPercentage: 10,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8 Gen 2 + Q1",
        chipset: "4nm TSMC (Cortex-X3 @ 3.20GHz, LPDDR5X + UFS 4.0)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 740",
        antutuScore: 1700000,
        geekbenchSingle: 2020,
        geekbenchMulti: 5540,
        gamingFpsRating: "144 FPS Game Frame Interpolation"
      },
      display: {
        sizeInch: 6.78,
        panelType: "1.5K 144Hz LTPO AMOLED (1.07B colors)",
        resolution: "2800 x 1260 pixels (452 ppi)",
        refreshRateHz: 144,
        peakBrightnessNits: 3000,
        protection: "Schott Xensation Up",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP Sony IMX920 OIS + 8MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.49\" Sony IMX920 VCS Sensor with OIS",
        mainAperture: "f/1.88",
        hasOis: true,
        ultraWideMP: 8,
        ultraWideFov: 116,
        telephotoMP: 0,
        opticalZoom: "None",
        frontMP: 16,
        videoCapabilities: "8K 30fps, 4K 60fps",
        dxomarkScore: 132
      },
      battery: {
        capacityMah: 5160,
        wiredChargingWatts: 120,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 26,
        batteryLifeHours: 26,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["128GB", "256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Funtouch OS 14)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "Funtouch OS"
      },
      build: {
        weightGrams: 190,
        thicknessMm: 7.99,
        ipRating: "IP54 (Splash Resistant)",
        backMaterial: "Dual-tone Red & White Vegan Leather / AG Glass",
        frameMaterial: "Polycarbonate"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 16,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 96,
      camera: 86,
      battery: 94,
      display: 95,
      valueForMoney: 98,
      mobiqIndex: 93
    },
    stores: [
      {
        storeName: "Amazon",
        price: 35999,
        originalPrice: 39999,
        inStock: true,
        dealBadge: "Lowest Price & 120W in Box",
        bankOffers: ["Flat ₹3000 Instant Discount on ICICI Bank Cards", "No Cost EMI"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.6,
        ratingCount: 16200
      }
    ],
    priceHistory: [
      { date: "2024-02-22", amazonPrice: 39999, flipkartPrice: 39999, cromaPrice: 39999, lowestPrice: 39999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 33999, flipkartPrice: 35999, cromaPrice: 36999, lowestPrice: 33999, event: "Great Indian Festival" },
      { date: "2025-01-20", amazonPrice: 35999, flipkartPrice: 37999, cromaPrice: 37999, lowestPrice: 35999, event: "Current Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 33999,
      allTimeHigh: 39999,
      averagePrice: 36500,
      currentBestPrice: 35999,
      currentBestStore: "Amazon",
      priceDropAmount: 4000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "1.7M AnTuTu score with 120W rapid charging and Sony IMX920 flagship sensor under ₹36k.",
      nextPredictedSale: "Summer Gaming Splash (Expected ₹34,499)"
    },
    pros: [
      "Over 1.7M AnTuTu score with Snapdragon 8 Gen 2 and UFS 4.0 storage",
      "120W FlashCharge tops up 5160mAh battery in just 26 mins (120W brick included)",
      "Vibrant 144Hz 1.5K LTPO AMOLED with dual-tone vegan leather design",
      "Sony IMX920 flagship primary camera captures excellent night shots"
    ],
    cons: [
      "Secondary ultra-wide camera is basic 8MP",
      "No 3.5mm audio jack or wireless charging"
    ],
    targetAudience: ["Competitive Mobile Gamers", "Power Seekers under 38k"]
  },

  // ==========================================
  // REALME
  // ==========================================
  {
    id: "realme-gt-6",
    name: "Realme GT 6",
    brand: "Realme",
    slug: "realme-gt-6",
    tagline: "Snapdragon 8s Gen 3, 6000 Nits Ultra Bright AMOLED, Sony LYT-808 OIS & 120W SuperVOOC",
    releaseDate: "2024-06",
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 38999,
    originalPrice: 42999,
    discountPercentage: 9,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8s Gen 3",
        chipset: "4nm Octa-core (Cortex-X4 @ 3.0GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 735",
        antutuScore: 1620000,
        geekbenchSingle: 1980,
        geekbenchMulti: 5120,
        gamingFpsRating: "90 FPS Ultra Stable"
      },
      display: {
        sizeInch: 6.78,
        panelType: "8T LTPO AMOLED",
        resolution: "2780 x 1264 pixels (1.5K, 450 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 6000,
        protection: "Corning Gorilla Glass Victus 2",
        hdrSupport: "Dolby Vision, Pro-XDR"
      },
      camera: {
        rearSummary: "50MP Sony LYT-808 OIS + 50MP 2x Telephoto + 8MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.4\" Sony LYT-808 with OIS",
        mainAperture: "f/1.69",
        hasOis: true,
        ultraWideMP: 8,
        ultraWideFov: 112,
        telephotoMP: 50,
        opticalZoom: "2x Optical Zoom & 4x In-sensor Zoom",
        frontMP: 32,
        videoCapabilities: "4K 60fps, 4K HDR Night Video",
        dxomarkScore: 134
      },
      battery: {
        capacityMah: 5500,
        wiredChargingWatts: 120,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 28,
        batteryLifeHours: 27,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB", "16GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (realme UI 5.0)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "realme UI with Next AI"
      },
      build: {
        weightGrams: 199,
        thicknessMm: 8.6,
        ipRating: "IP65",
        backMaterial: "Nano-level Mirror Coating Glass",
        frameMaterial: "Polycarbonate Metallic"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 15,
        wifiVersion: "Wi-Fi 6E",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 92,
      camera: 89,
      battery: 96,
      display: 98,
      valueForMoney: 95,
      mobiqIndex: 93
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 38999,
        originalPrice: 42999,
        inStock: true,
        dealBadge: "Lowest Price & ₹4000 Bank Off",
        bankOffers: ["Flat ₹4000 Instant Discount on SBI & HDFC Cards", "Exchange bonus ₹3000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 4120
      },
      {
        storeName: "Amazon",
        price: 39999,
        originalPrice: 42999,
        inStock: true,
        dealBadge: "Prime Fast Delivery",
        bankOffers: ["₹3000 Instant Discount with OneCard"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.4,
        ratingCount: 2200
      }
    ],
    priceHistory: [
      { date: "2024-06-25", amazonPrice: 42999, flipkartPrice: 42999, cromaPrice: 42999, lowestPrice: 42999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 38999, flipkartPrice: 36999, cromaPrice: 39999, lowestPrice: 36999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 39999, flipkartPrice: 38999, cromaPrice: 40999, lowestPrice: 38999, event: "Current Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 35999,
      allTimeHigh: 42999,
      averagePrice: 39200,
      currentBestPrice: 38999,
      currentBestStore: "Flipkart",
      priceDropAmount: 4000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "GOOD TIME TO BUY",
      verdictReason: "World's brightest 6000-nit LTPO display paired with huge 5500mAh battery and 120W charging under ₹40k.",
      nextPredictedSale: "Summer Bonanza (Expected ₹36,999)"
    },
    pros: [
      "Record-setting 6000-nit peak brightness 8T LTPO screen",
      "Flagship Sony LYT-808 primary sensor takes stunning photos",
      "Huge 5500mAh battery + 120W SuperVOOC adapter in box",
      "Strong Snapdragon 8s Gen 3 processor performance"
    ],
    cons: [
      "Ultra-wide camera is only 8MP",
      "Plastic frame instead of full metal"
    ],
    targetAudience: ["Display Geeks", "Heavy Outdoors Users", "All-Round Power Seekers"]
  },
  {
    id: "realme-13-pro-plus",
    name: "Realme 13 Pro+ 5G",
    brand: "Realme",
    slug: "realme-13-pro-plus",
    tagline: "Monet Inspired Design, Dual Sony 50MP Cameras (LYT-701 + LYT-600 3x Periscope) & HYPERIMAGE+ AI",
    releaseDate: "2024-07",
    imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 31999,
    originalPrice: 36999,
    discountPercentage: 13,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 7s Gen 2",
        chipset: "4nm Octa-core (Cortex-A78 @ 2.40GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 710",
        antutuScore: 680000,
        geekbenchSingle: 1020,
        geekbenchMulti: 2950,
        gamingFpsRating: "60 FPS Smooth"
      },
      display: {
        sizeInch: 6.7,
        panelType: "120Hz Curved AMOLED Pro-XDR",
        resolution: "2412 x 1080 pixels (FHD+, 394 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 2000,
        protection: "Corning Gorilla Glass 7i",
        hdrSupport: "HDR10+, Pro-XDR"
      },
      camera: {
        rearSummary: "50MP Sony LYT-701 OIS + 50MP Sony LYT-600 3x Periscope OIS + 8MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.56\" Sony LYT-701 OIS",
        mainAperture: "f/1.88",
        hasOis: true,
        ultraWideMP: 8,
        ultraWideFov: 112,
        telephotoMP: 50,
        opticalZoom: "3x Optical Periscope Zoom & 120x SuperZoom",
        frontMP: 32,
        videoCapabilities: "4K 30fps, 1080p 60fps with Ultra Steady",
        dxomarkScore: 134
      },
      battery: {
        capacityMah: 5200,
        wiredChargingWatts: 80,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 49,
        batteryLifeHours: 26,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (realme UI 5.0)",
        promisedOsUpdatesYears: 2,
        promisedSecurityUpdatesYears: 3,
        uiSkin: "realme UI with AI Ultra Clarity"
      },
      build: {
        weightGrams: 190,
        thicknessMm: 8.23,
        ipRating: "IP65 (Water & Dust Resistant)",
        backMaterial: "Claude Monet Inspired Frosted AG Glass / Vegan Leather Emerald",
        frameMaterial: "Polycarbonate Metallic"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 13,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.2",
        hasNfc: true
      }
    },
    scores: {
      performance: 81,
      camera: 94,
      battery: 92,
      display: 91,
      valueForMoney: 94,
      mobiqIndex: 90
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 31999,
        originalPrice: 36999,
        inStock: true,
        dealBadge: "Lowest Price & 80W Charger in Box",
        bankOffers: ["Flat ₹3000 Instant Discount on HDFC & SBI Cards", "Exchange Bonus ₹2000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 14800
      }
    ],
    priceHistory: [
      { date: "2024-07-30", amazonPrice: 36999, flipkartPrice: 36999, cromaPrice: 36999, lowestPrice: 36999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 32999, flipkartPrice: 29999, cromaPrice: 33999, lowestPrice: 29999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 33999, flipkartPrice: 31999, cromaPrice: 34999, lowestPrice: 31999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 29999,
      allTimeHigh: 36999,
      averagePrice: 33500,
      currentBestPrice: 31999,
      currentBestStore: "Flipkart",
      priceDropAmount: 5000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "World-first dual Sony 50MP camera setup (LYT-701 + LYT-600 3x periscope zoom) in the ₹30k segment.",
      nextPredictedSale: "Camera Carnival (Expected ₹30,499)"
    },
    pros: [
      "Dual 50MP Sony sensors with 3x periscope optical zoom produce DSLR-like portrait bokeh",
      "Stunning Claude Monet Monet Gold artistic frosted glass finish",
      "Solid 5200mAh battery with 80W fast charging and adapter in box",
      "Vibrant 120Hz curved AMOLED with Gorilla Glass 7i"
    ],
    cons: [
      "Snapdragon 7s Gen 2 is average for competitive 90-120 FPS gaming",
      "Pre-installed app recommendations require 2 minutes of setup cleanup"
    ],
    targetAudience: ["Portrait & Telephoto Photographers under 35k", "Design Lovers"]
  },

  // ==========================================
  // MOTOROLA
  // ==========================================
  {
    id: "motorola-edge-50-ultra",
    name: "Motorola Edge 50 Ultra 5G",
    brand: "Motorola",
    slug: "motorola-edge-50-ultra",
    tagline: "Snapdragon 8s Gen 3, Real Wood / Vegan Leather, 50MP Triple OIS with 3x Periscope & 125W Fast Charge",
    releaseDate: "2024-06",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80",
    category: "Flagship",
    basePrice: 49999,
    originalPrice: 59999,
    discountPercentage: 17,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8s Gen 3",
        chipset: "4nm TSMC Octa-core (Cortex-X4 @ 3.0GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 735",
        antutuScore: 1580000,
        geekbenchSingle: 1960,
        geekbenchMulti: 5120,
        gamingFpsRating: "90 FPS Ultra Stable"
      },
      display: {
        sizeInch: 6.7,
        panelType: "1.5K 144Hz Super HD 3D Curved pOLED (Pantone Validated)",
        resolution: "2712 x 1220 pixels (446 ppi)",
        refreshRateHz: 144,
        peakBrightnessNits: 2500,
        protection: "Corning Gorilla Glass Victus",
        hdrSupport: "HDR10+, Pantone SkinTone Validated"
      },
      camera: {
        rearSummary: "50MP 1/1.3\" OIS + 64MP 3x Periscope Telephoto OIS + 50MP Ultra-Wide Macro",
        mainMP: 50,
        mainSensor: "1/1.3\" Custom Sensor, f/1.6, OIS + Laser AF",
        mainAperture: "f/1.6",
        hasOis: true,
        ultraWideMP: 50,
        ultraWideFov: 122,
        telephotoMP: 64,
        opticalZoom: "3x Optical Periscope & 100x Super Zoom",
        frontMP: 50,
        videoCapabilities: "4K 60fps HDR10+ with AI Photo Enhancement Engine",
        dxomarkScore: 147
      },
      battery: {
        capacityMah: 4500,
        wiredChargingWatts: 125,
        wirelessChargingWatts: 50,
        chargingTimeMinutes: 19,
        batteryLifeHours: 23,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["12GB"],
        storageOptions: ["512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Hello UI)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "Hello UI (Clean Near-Stock Android with Moto AI)"
      },
      build: {
        weightGrams: 197,
        thicknessMm: 8.59,
        ipRating: "IP68 (Under-water submersible 1.5m for 30m)",
        backMaterial: "Real Nordic Wood / Pantone Color Vegan Leather",
        frameMaterial: "Sandblasted Aviation Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 16,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 92,
      camera: 95,
      battery: 89,
      display: 96,
      valueForMoney: 95,
      mobiqIndex: 94
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 49999,
        originalPrice: 59999,
        inStock: true,
        dealBadge: "Lowest Price & 125W in Box",
        bankOffers: ["Flat ₹5000 Instant Discount on ICICI & HDFC Cards", "Exchange Bonus ₹4000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.6,
        ratingCount: 5200
      }
    ],
    priceHistory: [
      { date: "2024-06-18", amazonPrice: 59999, flipkartPrice: 54999, cromaPrice: 59999, lowestPrice: 54999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 52999, flipkartPrice: 47999, cromaPrice: 51999, lowestPrice: 47999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 52999, flipkartPrice: 49999, cromaPrice: 52999, lowestPrice: 49999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 47999,
      allTimeHigh: 59999,
      averagePrice: 52800,
      currentBestPrice: 49999,
      currentBestStore: "Flipkart",
      priceDropAmount: 10000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Sensational flagship hardware: Real Nordic wood back, IP68, 64MP periscope zoom, 125W wired + 50W wireless charging under ₹50k.",
      nextPredictedSale: "Summer Flash Deal (Expected ₹47,499)"
    },
    pros: [
      "Unique Nordic Wood rear cover and sandblasted metal frame",
      "Complete flagship camera trio: 50MP Main + 64MP 3x Periscope + 50MP Ultra-Wide",
      "Full IP68 waterproof rating + 50W wireless fast charging",
      "125W TurboPower charger included in box (0-100% in 19 mins)",
      "Clean, ad-free Hello UI based on pure Android 14"
    ],
    cons: [
      "4500mAh battery is slightly smaller than 5000mAh segment rivals"
    ],
    targetAudience: ["Style & Aesthetic Lovers", "Clean UI Seekers", "Camera Enthusiasts under 50k"]
  },
  {
    id: "motorola-edge-50-pro",
    name: "Motorola Edge 50 Pro",
    brand: "Motorola",
    slug: "motorola-edge-50-pro",
    tagline: "World's 1st Pantone Validated 144Hz 1.5K 3D Curved pOLED, 125W TurboPower & IP68 Waterproof",
    releaseDate: "2024-04",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 29999,
    originalPrice: 35999,
    discountPercentage: 16,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 7 Gen 3",
        chipset: "4nm TSMC Octa-core (Cortex-A715 @ 2.63GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 720",
        antutuScore: 840000,
        geekbenchSingle: 1140,
        geekbenchMulti: 3120,
        gamingFpsRating: "60 FPS High"
      },
      display: {
        sizeInch: 6.7,
        panelType: "1.5K 10-bit 3D Curved pOLED (Pantone Validated)",
        resolution: "2712 x 1220 pixels (446 ppi)",
        refreshRateHz: 144,
        peakBrightnessNits: 2000,
        protection: "Corning Gorilla Glass",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP OIS (f/1.4) + 13MP Ultra-Wide Macro + 10MP 3x Telephoto OIS",
        mainMP: 50,
        mainSensor: "1/1.3\" Custom Sensor, Wide f/1.4 Aperture, OIS",
        mainAperture: "f/1.4",
        hasOis: true,
        ultraWideMP: 13,
        ultraWideFov: 120,
        telephotoMP: 10,
        opticalZoom: "3x Optical Zoom with OIS & 30x Hybrid",
        frontMP: 50,
        videoCapabilities: "4K 30fps with AI Adaptive Stabilization",
        dxomarkScore: 131
      },
      battery: {
        capacityMah: 4500,
        wiredChargingWatts: 125,
        wirelessChargingWatts: 50,
        chargingTimeMinutes: 19,
        batteryLifeHours: 22,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Hello UI)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "Hello UI (Clean Near-Stock Android)"
      },
      build: {
        weightGrams: 186,
        thicknessMm: 8.19,
        ipRating: "IP68 (Under-water submersible)",
        backMaterial: "Handcrafted Italian Acetate / Vegan Leather",
        frameMaterial: "Sandblasted Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 15,
        wifiVersion: "Wi-Fi 6E",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 85,
      camera: 93,
      battery: 88,
      display: 96,
      valueForMoney: 95,
      mobiqIndex: 91
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 29999,
        originalPrice: 35999,
        inStock: true,
        dealBadge: "Lowest Price & 125W Charger",
        bankOffers: ["Flat ₹2000 Instant Discount with HDFC Cards", "Exchange Bonus ₹2000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 14200
      }
    ],
    priceHistory: [
      { date: "2024-04-09", amazonPrice: 35999, flipkartPrice: 31999, cromaPrice: 35999, lowestPrice: 31999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 32999, flipkartPrice: 27999, cromaPrice: 31999, lowestPrice: 27999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 32999, flipkartPrice: 29999, cromaPrice: 32999, lowestPrice: 29999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 27999,
      allTimeHigh: 35999,
      averagePrice: 30800,
      currentBestPrice: 29999,
      currentBestStore: "Flipkart",
      priceDropAmount: 6000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Only phone under ₹30k with IP68 waterproof rating, 3x optical telephoto lens, 50W wireless charging, and 125W wired speed.",
      nextPredictedSale: "Spring Clearance (Expected ₹28,499)"
    },
    pros: [
      "Only sub-₹30k phone with full IP68 water/dust proofing + 50W wireless charging",
      "Stunning 144Hz Pantone-validated 1.5K curved pOLED display",
      "Dedicated 10MP 3x optical telephoto lens + 50MP f/1.4 main camera",
      "125W TurboPower charges phone to 100% in under 20 mins"
    ],
    cons: [
      "4500mAh battery is slightly smaller than rivals"
    ],
    targetAudience: ["Design & Aesthetics Lovers", "Camera Enthusiasts under ₹30k", "Clean UI Seekers"]
  },
  {
    id: "motorola-edge-50-fusion",
    name: "Motorola Edge 50 Fusion 5G",
    brand: "Motorola",
    slug: "motorola-edge-50-fusion",
    tagline: "144Hz 3D Curved Endless Edge pOLED, Sony LYT-700C OIS, IP68 Waterproof & 68W TurboPower",
    releaseDate: "2024-05",
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80",
    category: "Mid-Range",
    basePrice: 21999,
    originalPrice: 25999,
    discountPercentage: 15,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 7s Gen 2",
        chipset: "4nm Octa-core (Cortex-A78 @ 2.40GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 710",
        antutuScore: 610000,
        geekbenchSingle: 990,
        geekbenchMulti: 2840,
        gamingFpsRating: "60 FPS Smooth"
      },
      display: {
        sizeInch: 6.7,
        panelType: "144Hz 3D Curved Endless Edge pOLED",
        resolution: "2400 x 1080 pixels (FHD+, 395 ppi)",
        refreshRateHz: 144,
        peakBrightnessNits: 1600,
        protection: "Corning Gorilla Glass 5",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP Sony LYT-700C OIS + 13MP Ultra-Wide Macro",
        mainMP: 50,
        mainSensor: "1/1.56\" Sony LYT-700C with OIS & Ultra Pixel",
        mainAperture: "f/1.88",
        hasOis: true,
        ultraWideMP: 13,
        ultraWideFov: 120,
        telephotoMP: 0,
        opticalZoom: "None",
        frontMP: 32,
        videoCapabilities: "4K 30fps on both Rear and Front cameras",
        dxomarkScore: 124
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 68,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 45,
        batteryLifeHours: 28,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["128GB", "256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Hello UI)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "Hello UI (Clean, Ad-Free)"
      },
      build: {
        weightGrams: 175,
        thicknessMm: 7.9,
        ipRating: "IP68 (Submersible Waterproof)",
        backMaterial: "Marshmallow Blue Vegan Leather / Hot Pink Suede",
        frameMaterial: "Polycarbonate"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 15,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.2",
        hasNfc: true
      }
    },
    scores: {
      performance: 80,
      camera: 89,
      battery: 94,
      display: 95,
      valueForMoney: 98,
      mobiqIndex: 90
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 21999,
        originalPrice: 25999,
        inStock: true,
        dealBadge: "Lowest Price & 68W Charger",
        bankOffers: ["Flat ₹2000 Instant Discount on ICICI & HDFC Cards", "Special Price ₹21,999"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 38200
      }
    ],
    priceHistory: [
      { date: "2024-05-22", amazonPrice: 25999, flipkartPrice: 22999, cromaPrice: 25999, lowestPrice: 22999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 23999, flipkartPrice: 19999, cromaPrice: 23999, lowestPrice: 19999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 23999, flipkartPrice: 21999, cromaPrice: 24999, lowestPrice: 21999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 19999,
      allTimeHigh: 25999,
      averagePrice: 22800,
      currentBestPrice: 21999,
      currentBestStore: "Flipkart",
      priceDropAmount: 4000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Best all-rounder under ₹22k with full IP68 water resistance, Sony LYT-700C camera, and 144Hz curved screen.",
      nextPredictedSale: "Summer Rush (Expected ₹20,499)"
    },
    pros: [
      "Full IP68 waterproof underwater certification under ₹22,000",
      "Stunning lightweight (175g) 144Hz 3D curved pOLED display",
      "Sony LYT-700C main camera captures rich colors and 4K selfie video",
      "Clean, ad-free Hello UI with 3 years of OS upgrades"
    ],
    cons: [
      "Snapdragon 7s Gen 2 is suited for daily tasks rather than intense 90fps gaming",
      "No 3.5mm headphone jack"
    ],
    targetAudience: ["Under 25k Buyers", "Students", "Style & Slim Phone Lovers"]
  },

  // ==========================================
  // NOTHING & CMF
  // ==========================================
  {
    id: "nothing-phone-2a",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    slug: "nothing-phone-2a",
    tagline: "Custom Dimensity 7200 Pro, Iconic Glyph Interface & Clean Nothing OS 2.5",
    releaseDate: "2024-03",
    imageUrl: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80",
    category: "Mid-Range",
    basePrice: 21999,
    originalPrice: 25999,
    discountPercentage: 15,
    specs: {
      processor: {
        name: "MediaTek Dimensity 7200 Pro",
        chipset: "4nm TSMC 2nd Gen Octa-core (Cortex-A715 @ 2.8GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Mali-G610 MC4",
        antutuScore: 710000,
        geekbenchSingle: 1120,
        geekbenchMulti: 2610,
        gamingFpsRating: "60 FPS Stable"
      },
      display: {
        sizeInch: 6.7,
        panelType: "Flexible AMOLED (1.07 Billion Colors)",
        resolution: "2412 x 1084 pixels (FHD+, 394 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 1300,
        protection: "Corning Gorilla Glass 5",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP Main OIS + 50MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.56\" Samsung ISOCELL GN9 with OIS",
        mainAperture: "f/1.88",
        hasOis: true,
        ultraWideMP: 50,
        ultraWideFov: 114,
        telephotoMP: 0,
        opticalZoom: "None (2x in-sensor crop)",
        frontMP: 32,
        videoCapabilities: "4K 30fps, 1080p 60fps with Action Mode",
        dxomarkScore: 121
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 45,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 59,
        batteryLifeHours: 26,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["128GB", "256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Nothing OS 2.6)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "Nothing OS (Bloatware-Free, Pure Monochromatic UI)"
      },
      build: {
        weightGrams: 190,
        thicknessMm: 8.55,
        ipRating: "IP54 (Splash & Dust Resistant)",
        backMaterial: "Transparent Polycarbonate with Glyph LEDs",
        frameMaterial: "Polycarbonate with Matte finish"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 13,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 82,
      camera: 86,
      battery: 92,
      display: 89,
      valueForMoney: 97,
      mobiqIndex: 89
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 21999,
        originalPrice: 25999,
        inStock: true,
        dealBadge: "Lowest Price & ₹2000 Card Discount",
        bankOffers: ["Flat ₹2000 off on HDFC & SBI Credit Cards", "Special Price ₹21,999"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 18450
      },
      {
        storeName: "Croma",
        price: 23999,
        originalPrice: 25999,
        inStock: true,
        dealBadge: "Store Pick Available",
        bankOffers: ["₹1500 Instant Cashback on ICICI Cards"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Croma_Logo.png",
        productUrl: "https://www.croma.com",
        rating: 4.4,
        ratingCount: 890
      }
    ],
    priceHistory: [
      { date: "2024-03-12", amazonPrice: 25999, flipkartPrice: 23999, cromaPrice: 25999, lowestPrice: 23999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 23999, flipkartPrice: 19999, cromaPrice: 22999, lowestPrice: 19999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 23999, flipkartPrice: 21999, cromaPrice: 23999, lowestPrice: 21999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 19999,
      allTimeHigh: 25999,
      averagePrice: 22800,
      currentBestPrice: 21999,
      currentBestStore: "Flipkart",
      priceDropAmount: 4000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Cleanest software experience under ₹25,000 with zero pre-installed junkware and distinct transparent Glyph aesthetic.",
      nextPredictedSale: "Youth Tech Fest (Expected ₹20,999)"
    },
    pros: [
      "Zero bloatware Nothing OS with bespoke dot-matrix widgets",
      "Iconic transparent rear design with 3 customizable Glyph light strips",
      "Symmetrical 2.1mm bezels around the vibrant 120Hz flexible AMOLED",
      "Dual 50MP cameras (Main + Ultra-Wide)"
    ],
    cons: [
      "No charging brick in the box",
      "Plastic back can pick up hairline scratches without a skin"
    ],
    targetAudience: ["Clean UI Seekers", "Design & Aesthetics Lovers", "Students"]
  },
  {
    id: "cmf-phone-1",
    name: "CMF Phone 1 by Nothing",
    brand: "Nothing",
    slug: "cmf-phone-1",
    tagline: "Modular Interchangeable Backs, Dimensity 7300, 120Hz Super AMOLED & Clean Nothing OS",
    releaseDate: "2024-07",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    category: "Budget",
    basePrice: 14999,
    originalPrice: 19999,
    discountPercentage: 25,
    specs: {
      processor: {
        name: "MediaTek Dimensity 7300 5G",
        chipset: "4nm Energy-efficient TSMC (4x Cortex-A78 @ 2.5GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Mali-G615 MC2",
        antutuScore: 660000,
        geekbenchSingle: 1040,
        geekbenchMulti: 2980,
        gamingFpsRating: "60 FPS Smooth"
      },
      display: {
        sizeInch: 6.67,
        panelType: "Super AMOLED (120Hz LTPS)",
        resolution: "2400 x 1080 pixels (FHD+, 395 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 2000,
        protection: "Reinforced Glass",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP Sony Sensor + 2MP Portrait Sensor",
        mainMP: 50,
        mainSensor: "1/1.95\" Sony sensor, EIS",
        mainAperture: "f/1.8",
        hasOis: false,
        ultraWideMP: 0,
        ultraWideFov: 0,
        telephotoMP: 0,
        opticalZoom: "None",
        frontMP: 16,
        videoCapabilities: "4K 30fps, 1080p 60fps",
        dxomarkScore: 112
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 33,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 65,
        batteryLifeHours: 28,
        chargerInBox: false
      },
      ramStorage: {
        ramOptions: ["6GB", "8GB"],
        storageOptions: ["128GB"],
        expandableStorage: true
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Nothing OS 2.6)",
        promisedOsUpdatesYears: 2,
        promisedSecurityUpdatesYears: 3,
        uiSkin: "Nothing OS (Zero Bloatware)"
      },
      build: {
        weightGrams: 197,
        thicknessMm: 8.2,
        ipRating: "IP52 (Water-repellent)",
        backMaterial: "Interchangeable Modular Polycarbonate Case with Dial & Screws",
        frameMaterial: "Polycarbonate"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 9,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: false
      }
    },
    scores: {
      performance: 80,
      camera: 76,
      battery: 93,
      display: 88,
      valueForMoney: 99,
      mobiqIndex: 87
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 14999,
        originalPrice: 19999,
        inStock: true,
        dealBadge: "Lowest Price Under ₹15k",
        bankOffers: ["Flat ₹1000 Bank Card Discount", "Special Price ₹14,999"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 46000
      }
    ],
    priceHistory: [
      { date: "2024-07-12", amazonPrice: 19999, flipkartPrice: 15999, cromaPrice: 19999, lowestPrice: 15999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 17999, flipkartPrice: 13999, cromaPrice: 16999, lowestPrice: 13999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 17999, flipkartPrice: 14999, cromaPrice: 16999, lowestPrice: 14999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 13999,
      allTimeHigh: 19999,
      averagePrice: 15800,
      currentBestPrice: 14999,
      currentBestStore: "Flipkart",
      priceDropAmount: 5000,
      priceStatus: "All-Time Low",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Best clean software and 120Hz Super AMOLED panel available under ₹15,000 budget segment.",
      nextPredictedSale: "Budget Bonanza (Expected ₹14,499)"
    },
    pros: [
      "Zero bloatware Nothing OS in the sub-₹15k budget segment",
      "Fun modular accessories (kickstand, lanyard, card wallet, interchangeable cases)",
      "Bright 2000-nit 120Hz Super AMOLED display",
      "Power-efficient 4nm Dimensity 7300 chipset",
      "Expandable MicroSD card storage support up to 2TB"
    ],
    cons: [
      "No NFC or stereo speakers",
      "No charger or phone case included in box"
    ],
    targetAudience: ["Students", "Budget Buyers (Under 15k)", "Clean UI Seekers"]
  },

  // ==========================================
  // POCO
  // ==========================================
  {
    id: "poco-f6-5g",
    name: "Poco F6 5G",
    brand: "Poco",
    slug: "poco-f6-5g",
    tagline: "Snapdragon 8s Gen 3 (1.53M AnTuTu), 1.5K 120Hz AMOLED, Sony LYT-600 OIS & 90W TurboCharge",
    releaseDate: "2024-05",
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 27999,
    originalPrice: 33999,
    discountPercentage: 17,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8s Gen 3",
        chipset: "4nm TSMC (Cortex-X4 @ 3.0GHz, LPDDR5X + UFS 4.0)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 735",
        antutuScore: 1530000,
        geekbenchSingle: 1910,
        geekbenchMulti: 4980,
        gamingFpsRating: "90-120 FPS Ultra in Gaming"
      },
      display: {
        sizeInch: 6.67,
        panelType: "1.5K CrystalRes Flow AMOLED (68B Colors)",
        resolution: "2712 x 1220 pixels (446 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 2400,
        protection: "Corning Gorilla Glass Victus",
        hdrSupport: "Dolby Vision, HDR10+"
      },
      camera: {
        rearSummary: "50MP Sony LYT-600 OIS + 8MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.95\" Sony LYT-600 with OIS",
        mainAperture: "f/1.59",
        hasOis: true,
        ultraWideMP: 8,
        ultraWideFov: 119,
        telephotoMP: 0,
        opticalZoom: "None",
        frontMP: 20,
        videoCapabilities: "4K 60fps with AI Night Video",
        dxomarkScore: 125
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 90,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 35,
        batteryLifeHours: 25,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Xiaomi HyperOS)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "HyperOS"
      },
      build: {
        weightGrams: 179,
        thicknessMm: 7.8,
        ipRating: "IP64 (Splash Resistant)",
        backMaterial: "Matte Polycarbonate with Titanium color",
        frameMaterial: "Polycarbonate"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 15,
        wifiVersion: "Wi-Fi 6E",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 95,
      camera: 84,
      battery: 92,
      display: 94,
      valueForMoney: 98,
      mobiqIndex: 93
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 27999,
        originalPrice: 33999,
        inStock: true,
        dealBadge: "Lowest Price & 90W Charger",
        bankOffers: ["Flat ₹2000 Instant Discount on ICICI Bank Cards", "Exchange Bonus ₹2000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.4,
        ratingCount: 19800
      }
    ],
    priceHistory: [
      { date: "2024-05-28", amazonPrice: 33999, flipkartPrice: 29999, cromaPrice: 33999, lowestPrice: 29999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 29999, flipkartPrice: 25999, cromaPrice: 30999, lowestPrice: 25999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 29999, flipkartPrice: 27999, cromaPrice: 30999, lowestPrice: 27999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 25999,
      allTimeHigh: 33999,
      averagePrice: 28800,
      currentBestPrice: 27999,
      currentBestStore: "Flipkart",
      priceDropAmount: 6000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Flagship Snapdragon 8s Gen 3 processor with 1.53M AnTuTu score and 90W charging under ₹28k.",
      nextPredictedSale: "Summer Gaming Splash (Expected ₹26,499)"
    },
    pros: [
      "Extreme performance per rupee with Snapdragon 8s Gen 3 and UFS 4.0 storage",
      "Ultra lightweight at just 179g with slim 7.8mm profile",
      "90W Turbo charger included in box (0-100% in 35 mins)",
      "Vibrant 1.5K 120Hz Dolby Vision AMOLED with Gorilla Glass Victus"
    ],
    cons: [
      "Plastic frame & back",
      "Secondary ultra-wide camera is basic 8MP"
    ],
    targetAudience: ["Performance Seekers under 30k", "Gamers", "Value Flagship Hunters"]
  },
  {
    id: "poco-x6-pro-5g",
    name: "Poco X6 Pro 5G",
    brand: "Poco",
    slug: "poco-x6-pro-5g",
    tagline: "Dimensity 8300 Ultra (1.46M AnTuTu), 1.5K 120Hz Flow AMOLED & 67W Turbo Charge",
    releaseDate: "2024-01",
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80",
    category: "Mid-Range",
    basePrice: 23999,
    originalPrice: 28999,
    discountPercentage: 17,
    specs: {
      processor: {
        name: "MediaTek Dimensity 8300 Ultra",
        chipset: "4nm TSMC (Cortex-A715 @ 3.35GHz, LPDDR5X + UFS 4.0)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Mali-G615-MC6",
        antutuScore: 1460000,
        geekbenchSingle: 1510,
        geekbenchMulti: 4890,
        gamingFpsRating: "90 FPS Ultra in BGMI"
      },
      display: {
        sizeInch: 6.67,
        panelType: "1.5K CrystalRes Flow AMOLED (68B Colors)",
        resolution: "2712 x 1220 pixels (446 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 1800,
        protection: "Corning Gorilla Glass 5",
        hdrSupport: "Dolby Vision, HDR10+"
      },
      camera: {
        rearSummary: "64MP OIS Main + 8MP Ultra-Wide + 2MP Macro",
        mainMP: 64,
        mainSensor: "1/2.0\" OmniVision OV64B with OIS",
        mainAperture: "f/1.7",
        hasOis: true,
        ultraWideMP: 8,
        ultraWideFov: 120,
        telephotoMP: 0,
        opticalZoom: "None",
        frontMP: 16,
        videoCapabilities: "4K 30fps, 1080p 60fps",
        dxomarkScore: 118
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 67,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 44,
        batteryLifeHours: 24,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Xiaomi HyperOS)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "HyperOS"
      },
      build: {
        weightGrams: 186,
        thicknessMm: 8.25,
        ipRating: "IP54",
        backMaterial: "Eco-leather Yellow / Glass back",
        frameMaterial: "Polycarbonate"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 14,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 94,
      camera: 80,
      battery: 90,
      display: 92,
      valueForMoney: 98,
      mobiqIndex: 91
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 23999,
        originalPrice: 28999,
        inStock: true,
        dealBadge: "Lowest Price & Free 67W Charger",
        bankOffers: ["Flat ₹2000 ICICI Bank Discount", "Special Price ₹23,999"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.4,
        ratingCount: 32000
      }
    ],
    priceHistory: [
      { date: "2024-01-16", amazonPrice: 28999, flipkartPrice: 26999, cromaPrice: 28999, lowestPrice: 26999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 25999, flipkartPrice: 21999, cromaPrice: 26999, lowestPrice: 21999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 25499, flipkartPrice: 23999, cromaPrice: 26999, lowestPrice: 23999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 21999,
      allTimeHigh: 28999,
      averagePrice: 24800,
      currentBestPrice: 23999,
      currentBestStore: "Flipkart",
      priceDropAmount: 5000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Absurd performance per rupee with 1.46M AnTuTu score, UFS 4.0 and LPDDR5X memory under ₹25k.",
      nextPredictedSale: "Summer Gaming Splash (Expected ₹22,499)"
    },
    pros: [
      "Unmatched raw gaming horsepower with Dimensity 8300-Ultra",
      "Superb 1.5K 68-billion color Flow AMOLED screen",
      "Fast 67W turbo charger and case included in package"
    ],
    cons: [
      "Camera performance is average in low light"
    ],
    targetAudience: ["Hardcore Budget Gamers", "Value-for-Money Champions"]
  },

  // ==========================================
  // VIVO (CAMERA TITANS)
  // ==========================================
  {
    id: "vivo-x100-pro",
    name: "Vivo X100 Pro",
    brand: "Vivo",
    slug: "vivo-x100-pro",
    tagline: "Zeiss 1-Inch 50MP Main + Zeiss APO 100mm Floating Telephoto & Dimensity 9300",
    releaseDate: "2024-01",
    imageUrl: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80",
    category: "Camera-Centric",
    basePrice: 89999,
    originalPrice: 96999,
    discountPercentage: 7,
    specs: {
      processor: {
        name: "MediaTek Dimensity 9300 + Vivo V3 Chip",
        chipset: "4nm All-Big-Core (4x Cortex-X4 @ 3.25GHz + 4x Cortex-A720)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Immortalis-G720 MC12",
        antutuScore: 2150000,
        geekbenchSingle: 2280,
        geekbenchMulti: 7450,
        gamingFpsRating: "90-120 FPS High"
      },
      display: {
        sizeInch: 6.78,
        panelType: "8T LTPO Curved AMOLED (1.07B colors)",
        resolution: "2800 x 1260 pixels (452 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 3000,
        protection: "Armor Glass",
        hdrSupport: "Dolby Vision, HDR10+"
      },
      camera: {
        rearSummary: "50MP 1-inch Sony IMX989 Zeiss OIS + 50MP Zeiss APO Telephoto 4.3x + 50MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1.0\" Sony IMX989 with Zeiss T* Coating & OIS",
        mainAperture: "f/1.75",
        hasOis: true,
        ultraWideMP: 50,
        ultraWideFov: 119,
        telephotoMP: 50,
        opticalZoom: "4.3x Optical Zeiss APO Floating Lens (100mm)",
        frontMP: 32,
        videoCapabilities: "4K 60fps Cinematic Portrait Video with Vivo V3 chip",
        dxomarkScore: 158
      },
      battery: {
        capacityMah: 5400,
        wiredChargingWatts: 100,
        wirelessChargingWatts: 50,
        chargingTimeMinutes: 32,
        batteryLifeHours: 27,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["16GB"],
        storageOptions: ["512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Funtouch OS 14)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "Funtouch OS"
      },
      build: {
        weightGrams: 225,
        thicknessMm: 8.91,
        ipRating: "IP68",
        backMaterial: "Sunburst Pattern AG Glass / Vegan Leather Orange",
        frameMaterial: "Aviation-grade Aluminum"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 18,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 97,
      camera: 100,
      battery: 94,
      display: 95,
      valueForMoney: 88,
      mobiqIndex: 95
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 89999,
        originalPrice: 96999,
        inStock: true,
        dealBadge: "Lowest Price & ₹7000 Bank Off",
        bankOffers: ["Flat ₹7000 Instant Discount with SBI & ICICI Cards", "Exchange Bonus ₹5000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.7,
        ratingCount: 1650
      },
      {
        storeName: "Amazon",
        price: 92999,
        originalPrice: 96999,
        inStock: true,
        dealBadge: "Prime Offer",
        bankOffers: ["₹5000 Bank Discount"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.6,
        ratingCount: 890
      }
    ],
    priceHistory: [
      { date: "2024-01-15", amazonPrice: 96999, flipkartPrice: 96999, cromaPrice: 96999, lowestPrice: 96999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 91999, flipkartPrice: 86999, cromaPrice: 92999, lowestPrice: 86999, event: "Festive Sale" },
      { date: "2025-01-20", amazonPrice: 92999, flipkartPrice: 89999, cromaPrice: 93999, lowestPrice: 89999, event: "Current Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 86999,
      allTimeHigh: 96999,
      averagePrice: 92500,
      currentBestPrice: 89999,
      currentBestStore: "Flipkart",
      priceDropAmount: 7000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "The gold standard in smartphone portraiture and low-light zoom with massive 1-inch sensor and Zeiss optics.",
      nextPredictedSale: "Spring Photo Fest (Expected ₹87,999)"
    },
    pros: [
      "Arguably the best mobile portrait & telephoto zoom camera in the world with Zeiss APO lens",
      "Huge 1.0-inch Sony IMX989 sensor captures phenomenal dynamic range",
      "Monster Dimensity 9300 performance breaking 2.15 Million in AnTuTu",
      "Large 5400mAh battery with 100W wired and 50W wireless fast charging"
    ],
    cons: [
      "Large circular camera bump makes the phone top-heavy"
    ],
    targetAudience: ["Professional Photographers", "Portrait Lovers", "Camera Enthusiasts"]
  },
  {
    id: "vivo-v40-pro",
    name: "Vivo V40 Pro 5G",
    brand: "Vivo",
    slug: "vivo-v40-pro",
    tagline: "Zeiss Triple 50MP Cameras (Main + 2x Telephoto + Ultra-Wide), Dimensity 9200+ & 5500mAh Ultra Slim",
    releaseDate: "2024-08",
    imageUrl: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80",
    category: "Camera-Centric",
    basePrice: 49999,
    originalPrice: 54999,
    discountPercentage: 9,
    specs: {
      processor: {
        name: "MediaTek Dimensity 9200+ (4nm)",
        chipset: "4nm TSMC (Cortex-X3 @ 3.35GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Immortalis-G715 MC11",
        antutuScore: 1540000,
        geekbenchSingle: 1980,
        geekbenchMulti: 5310,
        gamingFpsRating: "90 FPS Ultra High"
      },
      display: {
        sizeInch: 6.78,
        panelType: "1.5K 120Hz 3D Curved AMOLED",
        resolution: "2800 x 1260 pixels (452 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 4500,
        protection: "Schott Xensation Alpha",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "50MP Sony IMX921 OIS + 50MP Sony IMX816 2x Telephoto + 50MP Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.56\" Sony IMX921 with Zeiss T* Coating & OIS",
        mainAperture: "f/1.88",
        hasOis: true,
        ultraWideMP: 50,
        ultraWideFov: 119,
        telephotoMP: 50,
        opticalZoom: "2x Optical Zeiss Telephoto (50mm focal length)",
        frontMP: 50,
        videoCapabilities: "4K 60fps on both Rear and Front cameras",
        dxomarkScore: 141
      },
      battery: {
        capacityMah: 5500,
        wiredChargingWatts: 80,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 45,
        batteryLifeHours: 28,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Funtouch OS 14)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "Funtouch OS with Zeiss Cinematic Filters"
      },
      build: {
        weightGrams: 192,
        thicknessMm: 7.58,
        ipRating: "IP68 (Waterproof & Dustproof)",
        backMaterial: "Ganges Blue / Titanium Grey AG Glass",
        frameMaterial: "Polycarbonate Metallic"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 16,
        wifiVersion: "Wi-Fi 7",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 92,
      camera: 96,
      battery: 95,
      display: 96,
      valueForMoney: 93,
      mobiqIndex: 94
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 49999,
        originalPrice: 54999,
        inStock: true,
        dealBadge: "Lowest Price & Zeiss Optics",
        bankOffers: ["Flat ₹4000 Instant Discount on HDFC Cards", "Exchange bonus ₹3000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.6,
        ratingCount: 6800
      }
    ],
    priceHistory: [
      { date: "2024-08-15", amazonPrice: 54999, flipkartPrice: 54999, cromaPrice: 54999, lowestPrice: 54999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 51999, flipkartPrice: 48999, cromaPrice: 52999, lowestPrice: 48999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 51999, flipkartPrice: 49999, cromaPrice: 52999, lowestPrice: 49999, event: "Current Deal" }
    ],
    priceAnalysis: {
      allTimeLow: 48999,
      allTimeHigh: 54999,
      averagePrice: 51800,
      currentBestPrice: 49999,
      currentBestStore: "Flipkart",
      priceDropAmount: 5000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "All-50MP Zeiss camera suite (Front + 3 Rear sensors), IP68 waterproof rating, and 5500mAh battery in a super-slim 7.58mm body.",
      nextPredictedSale: "Portrait Fest (Expected ₹47,999)"
    },
    pros: [
      "Every single camera is 50MP with Zeiss T* coating (Rear Main + Telephoto + Ultra-Wide + Selfie)",
      "Unbelievably slim (7.58mm) and light (192g) despite massive 5500mAh battery",
      "Full IP68 waterproof rating",
      "Flagship-grade Dimensity 9200+ processor performance"
    ],
    cons: [
      "No wireless charging support"
    ],
    targetAudience: ["Social Media Creators", "Portrait Photographers", "Slim Phone Lovers"]
  },

  // ==========================================
  // XIAOMI & REDMI
  // ==========================================
  {
    id: "xiaomi-14-civi",
    name: "Xiaomi 14 Civi 5G",
    brand: "Xiaomi",
    slug: "xiaomi-14-civi",
    tagline: "Leica Professional Triple Camera, Floating Quad-Curve AMOLED, Dual 32MP Selfies & Snapdragon 8s Gen 3",
    releaseDate: "2024-06",
    imageUrl: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 39999,
    originalPrice: 47999,
    discountPercentage: 16,
    specs: {
      processor: {
        name: "Qualcomm Snapdragon 8s Gen 3",
        chipset: "4nm TSMC (Cortex-X4 @ 3.0GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Adreno 735",
        antutuScore: 1560000,
        geekbenchSingle: 1940,
        geekbenchMulti: 5080,
        gamingFpsRating: "90 FPS Ultra High"
      },
      display: {
        sizeInch: 6.55,
        panelType: "1.5K Floating Quad-Curve AMOLED (120Hz)",
        resolution: "2750 x 1236 pixels (460 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 3000,
        protection: "Corning Gorilla Glass Victus 2",
        hdrSupport: "Dolby Vision, HDR10+"
      },
      camera: {
        rearSummary: "50MP Leica Summilux OIS + 50MP Leica 2x Portrait Telephoto + 12MP Leica Ultra-Wide",
        mainMP: 50,
        mainSensor: "1/1.55\" Light Hunter 800 with Leica Summilux lens & OIS",
        mainAperture: "f/1.63",
        hasOis: true,
        ultraWideMP: 12,
        ultraWideFov: 120,
        telephotoMP: 50,
        opticalZoom: "2x Optical Leica Telephoto (50mm focal length)",
        frontMP: 32,
        videoCapabilities: "4K 60fps HDR10+ with Leica Authentic & Vibrant color profiles",
        dxomarkScore: 139
      },
      battery: {
        capacityMah: 4700,
        wiredChargingWatts: 67,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 40,
        batteryLifeHours: 25,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Xiaomi HyperOS)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "HyperOS"
      },
      build: {
        weightGrams: 177,
        thicknessMm: 7.45,
        ipRating: "IP54",
        backMaterial: "Matcha Green Vegan Leather / Shadow Black Glass",
        frameMaterial: "Sandblasted Metal Frame"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 14,
        wifiVersion: "Wi-Fi 6E",
        bluetoothVersion: "Bluetooth 5.4",
        hasNfc: true
      }
    },
    scores: {
      performance: 92,
      camera: 94,
      battery: 89,
      display: 95,
      valueForMoney: 94,
      mobiqIndex: 93
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 39999,
        originalPrice: 47999,
        inStock: true,
        dealBadge: "Lowest Price & Leica Optics",
        bankOffers: ["Flat ₹3000 Instant Discount on ICICI Bank Cards", "Exchange Bonus ₹3000"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.5,
        ratingCount: 7800
      },
      {
        storeName: "Amazon",
        price: 41999,
        originalPrice: 47999,
        inStock: true,
        dealBadge: "Prime Offer",
        bankOffers: ["₹2500 Card Discount"],
        storeLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        productUrl: "https://www.amazon.in",
        rating: 4.4,
        ratingCount: 3200
      }
    ],
    priceHistory: [
      { date: "2024-06-12", amazonPrice: 47999, flipkartPrice: 42999, cromaPrice: 47999, lowestPrice: 42999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 42999, flipkartPrice: 37999, cromaPrice: 43999, lowestPrice: 37999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 41999, flipkartPrice: 39999, cromaPrice: 42999, lowestPrice: 39999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 37999,
      allTimeHigh: 47999,
      averagePrice: 41500,
      currentBestPrice: 39999,
      currentBestStore: "Flipkart",
      priceDropAmount: 8000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Leica Summilux triple cameras with dual 32MP selfie sensors and ultra-light 177g quad-curved body under ₹40k.",
      nextPredictedSale: "Summer Flash Deal (Expected ₹38,499)"
    },
    pros: [
      "Leica Summilux professional color profiles and 50MP portrait telephoto",
      "Dual 32MP front selfie cameras (Wide + Ultra-Wide with autofocus)",
      "Ultra-slim (7.45mm) and remarkably lightweight at just 177 grams",
      "Premium floating quad-curve AMOLED with Gorilla Glass Victus 2"
    ],
    cons: [
      "No IP68 waterproof rating (IP54 only)",
      "4700mAh battery is slightly smaller than 5000mAh segment average"
    ],
    targetAudience: ["Vloggers & Selfie Lovers", "Leica Camera Fans", "Compact Phone Enthusiasts"]
  },
  {
    id: "redmi-note-13-pro-plus",
    name: "Redmi Note 13 Pro+ 5G",
    brand: "Xiaomi",
    slug: "redmi-note-13-pro-plus",
    tagline: "200MP OIS Camera, 1.5K Curved AMOLED, IP68 Waterproof & 120W HyperCharge",
    releaseDate: "2024-01",
    imageUrl: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&auto=format&fit=crop&q=80",
    category: "Upper Mid-Range",
    basePrice: 27999,
    originalPrice: 33999,
    discountPercentage: 17,
    specs: {
      processor: {
        name: "MediaTek Dimensity 7200 Ultra",
        chipset: "4nm TSMC Octa-core (Cortex-A715 @ 2.8GHz)",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Mali-G610 MC4",
        antutuScore: 780000,
        geekbenchSingle: 1130,
        geekbenchMulti: 2680,
        gamingFpsRating: "60 FPS Medium/High"
      },
      display: {
        sizeInch: 6.67,
        panelType: "1.5K 3D Curved CrystalRes AMOLED (12-bit)",
        resolution: "2712 x 1220 pixels (446 ppi)",
        refreshRateHz: 120,
        peakBrightnessNits: 1800,
        protection: "Corning Gorilla Glass Victus",
        hdrSupport: "Dolby Vision, HDR10+"
      },
      camera: {
        rearSummary: "200MP Samsung ISOCELL HP3 OIS + 8MP Ultra-Wide + 2MP Macro",
        mainMP: 200,
        mainSensor: "1/1.4\" Samsung ISOCELL HP3, 16-in-1 binning, OIS + EIS",
        mainAperture: "f/1.65",
        hasOis: true,
        ultraWideMP: 8,
        ultraWideFov: 120,
        telephotoMP: 0,
        opticalZoom: "None (4x In-sensor lossless zoom)",
        frontMP: 16,
        videoCapabilities: "4K 30fps, 1080p 60fps",
        dxomarkScore: 124
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 120,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 19,
        batteryLifeHours: 24,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["256GB", "512GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Xiaomi HyperOS)",
        promisedOsUpdatesYears: 3,
        promisedSecurityUpdatesYears: 4,
        uiSkin: "HyperOS"
      },
      build: {
        weightGrams: 204,
        thicknessMm: 8.9,
        ipRating: "IP68 (Waterproof & Dustproof)",
        backMaterial: "Curved AG Glass / Vegan Leather Fusion",
        frameMaterial: "Polycarbonate"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 10,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 84,
      camera: 90,
      battery: 93,
      display: 94,
      valueForMoney: 93,
      mobiqIndex: 91
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 27999,
        originalPrice: 33999,
        inStock: true,
        dealBadge: "Lowest Price & 120W in Box",
        bankOffers: ["Flat ₹2000 off with ICICI & HDFC Cards", "Special Deal ₹27,999"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.4,
        ratingCount: 21800
      }
    ],
    priceHistory: [
      { date: "2024-01-10", amazonPrice: 33999, flipkartPrice: 31999, cromaPrice: 33999, lowestPrice: 31999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 28999, flipkartPrice: 25999, cromaPrice: 29999, lowestPrice: 25999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 28999, flipkartPrice: 27999, cromaPrice: 29999, lowestPrice: 27999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 25999,
      allTimeHigh: 33999,
      averagePrice: 29800,
      currentBestPrice: 27999,
      currentBestStore: "Flipkart",
      priceDropAmount: 6000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "First Redmi Note with IP68 waterproof certification, 200MP camera, and 120W charging under ₹28,000.",
      nextPredictedSale: "Xiaomi Fan Fest (Expected ₹26,499)"
    },
    pros: [
      "Ultra high resolution 200MP main camera with 4x lossless crop",
      "Full IP68 waterproof & dust resistance rating",
      "120W HyperCharge powers up 5000mAh battery in just 19 minutes",
      "Gorgeous 1.5K 12-bit curved AMOLED display"
    ],
    cons: [
      "Auxiliary cameras (8MP ultra-wide and 2MP macro) are basic"
    ],
    targetAudience: ["Camera Enthusiasts", "Fast Charging Seekers", "Waterproof Seekers under 30k"]
  },
  {
    id: "infinix-gt-20-pro",
    name: "Infinix GT 20 Pro 5G",
    brand: "Infinix",
    slug: "infinix-gt-20-pro",
    tagline: "Cyber Mecha Design with RGB Mini-LED, Dimensity 8200 Ultimate, Pixelworks Gaming Display Chip & 144Hz AMOLED",
    releaseDate: "2024-05",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    category: "Gaming",
    basePrice: 22999,
    originalPrice: 27999,
    discountPercentage: 17,
    specs: {
      processor: {
        name: "MediaTek Dimensity 8200 Ultimate 5G",
        chipset: "4nm TSMC Octa-core + Dedicated Pixelworks X5 Turbo Gaming Display Chip",
        nanometer: 4,
        cpuCores: 8,
        gpu: "Mali-G610 MC6 + Pixelworks X5 Turbo",
        antutuScore: 950000,
        geekbenchSingle: 1250,
        geekbenchMulti: 3820,
        gamingFpsRating: "120 FPS in BGMI (Official Gaming Partner)"
      },
      display: {
        sizeInch: 6.78,
        panelType: "144Hz Bezelless LTPS AMOLED (10-bit)",
        resolution: "2436 x 1080 pixels (FHD+, 393 ppi)",
        refreshRateHz: 144,
        peakBrightnessNits: 1300,
        protection: "Corning Gorilla Glass",
        hdrSupport: "HDR10+"
      },
      camera: {
        rearSummary: "108MP Samsung HM6 OIS + 2MP Macro + 2MP Depth",
        mainMP: 108,
        mainSensor: "1/1.67\" Samsung HM6 with OIS",
        mainAperture: "f/1.75",
        hasOis: true,
        ultraWideMP: 0,
        ultraWideFov: 0,
        telephotoMP: 0,
        opticalZoom: "None",
        frontMP: 32,
        videoCapabilities: "4K 60fps with Dual View Video",
        dxomarkScore: 119
      },
      battery: {
        capacityMah: 5000,
        wiredChargingWatts: 45,
        wirelessChargingWatts: 0,
        chargingTimeMinutes: 52,
        batteryLifeHours: 25,
        chargerInBox: true
      },
      ramStorage: {
        ramOptions: ["8GB", "12GB"],
        storageOptions: ["256GB"],
        expandableStorage: false
      },
      software: {
        osName: "Android",
        osVersion: "Android 14 (Clean XOS 14 for GT)",
        promisedOsUpdatesYears: 2,
        promisedSecurityUpdatesYears: 3,
        uiSkin: "Pure XOS (Zero Bloatware / Zero Ads)"
      },
      build: {
        weightGrams: 194,
        thicknessMm: 8.15,
        ipRating: "IP54 (Splash Resistant)",
        backMaterial: "Cyber Mecha Transparent Glass with Mecha Loop RGB LEDs",
        frameMaterial: "Polycarbonate"
      },
      connectivity: {
        has5G: true,
        fiveGBandsCount: 14,
        wifiVersion: "Wi-Fi 6",
        bluetoothVersion: "Bluetooth 5.3",
        hasNfc: true
      }
    },
    scores: {
      performance: 89,
      camera: 81,
      battery: 91,
      display: 94,
      valueForMoney: 97,
      mobiqIndex: 90
    },
    stores: [
      {
        storeName: "Flipkart",
        price: 22999,
        originalPrice: 27999,
        inStock: true,
        dealBadge: "Official Esports Gaming Phone",
        bankOffers: ["Flat ₹2000 off on HDFC & SBI Cards", "Free Gaming Kit with cooling fan"],
        storeLogo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
        productUrl: "https://www.flipkart.com",
        rating: 4.4,
        ratingCount: 16400
      }
    ],
    priceHistory: [
      { date: "2024-05-28", amazonPrice: 27999, flipkartPrice: 24999, cromaPrice: 27999, lowestPrice: 24999, event: "Launch" },
      { date: "2024-10-10", amazonPrice: 24999, flipkartPrice: 20999, cromaPrice: 24999, lowestPrice: 20999, event: "Big Billion Days" },
      { date: "2025-01-20", amazonPrice: 24999, flipkartPrice: 22999, cromaPrice: 25999, lowestPrice: 22999, event: "Current Price" }
    ],
    priceAnalysis: {
      allTimeLow: 20999,
      allTimeHigh: 27999,
      averagePrice: 23800,
      currentBestPrice: 22999,
      currentBestStore: "Flipkart",
      priceDropAmount: 5000,
      priceStatus: "Good Deal",
      timeToBuyVerdict: "BUY NOW - Peak Discount",
      verdictReason: "Only phone under ₹23k with dedicated Pixelworks Gaming chip delivering native 120 FPS gaming and custom RGB LED backlighting.",
      nextPredictedSale: "Esports Fest (Expected ₹21,499)"
    },
    pros: [
      "Dedicated Pixelworks X5 Turbo chip unlocks stable 120 FPS in BGMI",
      "Futuristic Cyber Mecha design with customizable Mecha Loop RGB LEDs",
      "JBL dual stereo speakers with Hi-Res audio",
      "Clean zero-bloatware software with 108MP OIS primary camera"
    ],
    cons: [
      "No ultra-wide angle camera lens",
      "45W charging is moderate compared to 67W rivals"
    ],
    targetAudience: ["Esports Gamers under 25k", "RGB & Mecha Aesthetics Fans"]
  }
];

module.exports = seedPhones;
