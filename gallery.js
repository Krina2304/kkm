        function openModal(event) {
            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = ''; // Clear previous content

            let images = [];
            switch (event) {
                case 'event1':
                    images = ['images/20250617_091645.jpg',
                        "images/20250617_091711.jpg",
                        "images/20250617_091711.jpg",
                        "images/20250617_091720.jpg", 
                        "images/20250617_092333.jpg",
                        "images/20250617_092353.jpg" ,
                        "images/20250617_092356.jpg" ,
                        "images/20250617_092424.jpg" ,
                        "images/20250617_092431.jpg" ,
                        "images/20250617_092504.jpg" 
                    ];
                    break;
                case 'event2':
                    images = ["images/primary/Screenshot_20250618_111821_Instagram.jpg" ,"images/primary/Screenshot_20250618_111833_Instagram.jpg ","images/primary/Screenshot_20250618_111855_Instagram.jpg", "images/primary/Screenshot_20250618_111902_Instagram.jpg ","images/primary/Screenshot_20250618_111924_Instagram.jpg", "images/primary/Screenshot_20250618_111930_Instagram.jpg ","images/primary/Screenshot_20250618_111933_Instagram.jpg", "images/primary/Screenshot_20250618_111938_Instagram.jpg", "images/primary/Screenshot_20250618_111943_Instagram.jpg ","images/primary/Screenshot_20250618_111957_Instagram.jpg ","images/primary/Screenshot_20250618_112007_Instagram.jpg", "images/primary/Screenshot_20250618_112014_Instagram.jpg"];
                    break;
                case 'event3':
                    images = ["images/vidhyalaya/Screenshot_20250618_111733_Instagram.jpg ","images/vidhyalaya/Screenshot_20250618_113726_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_113751_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_113804_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_113814_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_113917_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_113935_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_113945_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114012_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114027_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_114037_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114052_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_114058_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114117_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_114139_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114159_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_114210_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114244_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114322_Facebook.jpg ","images/vidhyalaya/Screenshot_20250618_114417_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114431_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114459_Facebook.jpg","images/vidhyalaya/Screenshot_20250618_114543_Facebook.jpg"];
                    break;
                case 'event4':
                    images = ["images/arts collage/Screenshot_20250618_120437_Facebook.jpg ","images/arts collage/Screenshot_20250618_120444_Facebook.jpg ","images/arts collage/Screenshot_20250618_120453_Facebook.jpg ","images/arts collage/Screenshot_20250618_120503_Facebook.jpg ","images/arts collage/Screenshot_20250618_120533_Facebook.jpg ","images/arts collage/Screenshot_20250618_120546_Facebook.jpg","images/arts collage/Screenshot_20250618_120559_Facebook.jpg ","images/arts collage/Screenshot_20250618_120605_Facebook.jpg ","images/arts collage/Screenshot_20250618_120618_Facebook.jpg","images/arts collage/Screenshot_20250618_120635_Facebook.jpg ","images/arts collage/Screenshot_20250618_120646_Facebook.jpg ","images/arts collage/Screenshot_20250618_120652_Facebook.jpg ","images/arts collage/Screenshot_20250618_120700_Facebook.jpg ","images/arts collage/Screenshot_20250618_120731_Facebook.jpg","images/arts collage/Screenshot_20250618_120748_Facebook.jpg","images/arts collage/Screenshot_20250618_120800_Facebook.jpg ","images/arts collage/Screenshot_20250618_120809_Facebook.jpg","images/arts collage/Screenshot_20250618_120828_Facebook.jpg","images/arts collage/Screenshot_20250618_120835_Facebook.jpg ","images/arts collage/Screenshot_20250618_120842_Facebook.jpg"];
                    break;
                case 'event5':
                    images = ["images/bed/Screenshot 2025-06-18 122518.png","images/bed/Screenshot 2025-06-18 122535.png","images/bed/Screenshot 2025-06-18 122609.png","images/bed/Screenshot 2025-06-18 122626.png ","images/bed/Screenshot 2025-06-18 122642.png ","images/bed/Screenshot 2025-06-18 122658.png","images/bed/Screenshot 2025-06-18 122713.png"];
                    break;
                case 'event6':
                    images = ["images/20250617_092658.jpg",
                            "images/20250617_092715.jpg",
                            "images/20250617_092726.jpg"];
                    break;
            }

            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                modalContent.appendChild(img);
            });

            document.getElementById('myModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }




document.addEventListener("DOMContentLoaded", function() {

    const navbarLinks = document.querySelectorAll('.navbar-link');
    const checkBox = document.getElementById('check');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            checkBox.checked = false; // Uncheck the checkbox to close the menu
        });
    });
})

