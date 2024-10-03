$(document).ready(function() {
    // Array of image URLs
    var images = [
"assets/01F10889-453C-4854-B5F1-8023CD80FF9F_1_105_c.jpeg","assets/041D5B16-9E0E-4A18-9EBD-91532E3377F2_1_105_c.jpeg","assets/044B728A-410A-46FE-BE3F-1EE55A5566F0_1_105_c.jpeg","assets/242E3853-FAB2-4657-8D36-CFD32B8DBB7F_1_105_c.jpeg","assets/24FA39D9-8C92-438D-B86A-6DDC0B6C547F_1_105_c.jpeg","assets/26A91A28-0E03-48D5-9D0B-8DF88CB2A0D0_1_105_c.jpeg","assets/2BF9A4CB-5F4C-458F-8D35-BA9CF7FBD37F_1_105_c.jpeg","assets/2C716F1B-7EEC-4B65-8E10-EA3914E66008_1_105_c.jpeg","assets/31BB2680-1B51-4C0D-861E-BDD4EFE8A163_1_105_c.jpeg","assets/3BC6DCE0-0BA7-4143-B0C4-56283C2D15FA_1_105_c.jpeg","assets/479DBE05-C7F3-4761-A96B-F9C0C0590E93_1_105_c.jpeg","assets/548B2137-C50F-4967-A2ED-033ADE9A5D86_1_105_c.jpeg","assets/5C1B94C7-A320-4464-ACC4-2CEF1F15CCE1_1_105_c.jpeg","assets/5EE41C84-391B-46C2-B562-D4B000C96D01_1_105_c.jpeg","assets/5F273D42-E7D2-4852-9A68-97BEA5C16492_1_105_c.jpeg","assets/628F961E-E15C-45CB-8ECB-03B6B111D5E2_1_105_c.jpeg","assets/692AF261-BD9D-446B-B64B-9FF7F5C639F4_1_105_c.jpeg","assets/780E11A9-1FBA-42D7-9477-7C5C2041C09B_1_105_c.jpeg","assets/967F8841-B6A5-4978-A0EB-6BFBC6438E2D_1_105_c.jpeg","assets/9DDC3A04-F108-492B-8C3C-60BD2F857988_1_105_c.jpeg","assets/A3559D09-C706-4378-B226-EF65C97F2899_1_105_c.jpeg","assets/A3A07ED7-D9E4-4321-85D5-FDFA7F5699B2_1_105_c.jpeg","assets/B0B5A3E0-8E82-41F0-AA5D-70C95E1FA7E0_1_105_c.jpeg","assets/C80A28DD-43A1-4183-92E0-2B3B50E9168E_1_105_c.jpeg","assets/CD556FB2-7710-4926-96F9-E362A1BFCBE3_1_105_c.jpeg","assets/DD6CC085-DC17-4424-B2E4-56B3291DE730_1_105_c.jpeg"
        // Add more image URLs as needed
    ];

    var slideshowInterval;

    //  javascript random
    var currentIndex = Math.floor(Math.random() * images.length);

    $('#startButton').click(function() {
        // Hide the start button
        $(this).hide();

        // Play the background music
        var music = $('#backgroundMusic')[0];
        music.play();
        $('.quotes').text("i love you to the moon and back <3");

        // Start the slideshow
        $('#slideshow').attr('src', images[currentIndex]).fadeIn();

        slideshowInterval = setInterval(function() {
            nextIndex = Math.floor(Math.random() * images.length);
            while(nextIndex == currentIndex){
                nextIndex = Math.floor(Math.random() * images.length);
            }
            currentIndex = nextIndex;
            $('#slideshow').fadeOut(function() {
                $(this).attr('src', images[currentIndex]).fadeIn();
            });
        }, 3000); // Change image every 3 seconds
    });
});
