const result = [
    "Pakistan International Airlines, Pakistan International Airlines Refundable  01:55 PM 20-Apr KHI    Non-Stop 03:15 PM 20-Apr DXB  12:40 PM 25-Apr DXB    Non-Stop 03:40 PM 25-Apr KHI         Rs 77,122 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "FlyDubai, FlyDubai Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 95,351 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 45M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:30 PM 25-Apr DXB 2H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 128,546 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 50M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:30 PM 25-Apr DXB 2H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 128,546 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M10H 40M  DOHMCT 2 Stops 03:40 PM 21-Apr DXB  11:30 PM 25-Apr DXB 2H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 128,546 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 45M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:30 PM 25-Apr DXB 21H 5M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 50M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  05:30 AM 25-Apr DXB 15H 5M  DOH 1 Stop 01:30 AM 26-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M10H 40M  DOHMCT 2 Stops 03:40 PM 21-Apr DXB  11:30 PM 25-Apr DXB 21H 5M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 50M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:30 PM 25-Apr DXB 21H 5M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 45M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  05:30 AM 25-Apr DXB 15H 5M  DOH 1 Stop 01:30 AM 26-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M10H 40M  DOHMCT 2 Stops 03:40 PM 21-Apr DXB  05:30 AM 25-Apr DXB 20H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 50M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  05:30 AM 25-Apr DXB 20H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 45M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  05:30 AM 25-Apr DXB 20H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M10H 40M  DOHMCT 2 Stops 03:40 PM 21-Apr DXB  05:30 AM 25-Apr DXB 15H 5M  DOH 1 Stop 01:30 AM 26-Apr KHI         Rs 129,570 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M10H 40M  DOHMCT 2 Stops 03:40 PM 21-Apr DXB  11:55 PM 25-Apr DXB 1H 55M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 134,000 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 50M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:55 PM 25-Apr DXB 1H 55M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 134,000 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 45M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:55 PM 25-Apr DXB 1H 55M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 134,000 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 50M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:55 PM 25-Apr DXB 20H 35M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 135,024 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M10H 40M  DOHMCT 2 Stops 03:40 PM 21-Apr DXB  11:55 PM 25-Apr DXB 20H 35M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 135,024 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 14H 5M4H 45M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:55 PM 25-Apr DXB 20H 35M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 135,024 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 4H 15M  BAH 1 Stop 04:15 AM 21-Apr DXB  08:00 AM 25-Apr DXB 6H 15M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 22H 25M  BAH 1 Stop 10:35 PM 21-Apr DXB  08:00 AM 25-Apr DXB 6H 15M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 16H 5M  BAH 1 Stop 04:10 PM 21-Apr DXB  08:00 AM 25-Apr DXB 6H 15M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 20H 25M  BAH 1 Stop 08:15 PM 21-Apr DXB  08:00 AM 25-Apr DXB 6H 15M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 22H 25M  BAH 1 Stop 10:35 PM 21-Apr DXB  07:10 PM 25-Apr DXB 5H 35M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 4H 15M  BAH 1 Stop 04:15 AM 21-Apr DXB  09:00 PM 25-Apr DXB 3H 50M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 4H 15M  BAH 1 Stop 04:15 AM 21-Apr DXB  11:35 PM 25-Apr DXB 1H 10M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 16H 5M  BAH 1 Stop 04:10 PM 21-Apr DXB  11:35 PM 25-Apr DXB 1H 10M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 20H 25M  BAH 1 Stop 08:15 PM 21-Apr DXB  11:35 PM 25-Apr DXB 1H 10M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 22H 25M  BAH 1 Stop 10:35 PM 21-Apr DXB  11:35 PM 25-Apr DXB 1H 10M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 4H 15M  BAH 1 Stop 04:15 AM 21-Apr DXB  12:55 PM 25-Apr DXB 1H 15M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 16H 5M  BAH 1 Stop 04:10 PM 21-Apr DXB  12:55 PM 25-Apr DXB 1H 15M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 20H 25M  BAH 1 Stop 08:15 PM 21-Apr DXB  12:55 PM 25-Apr DXB 1H 15M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 20H 25M  BAH 1 Stop 08:15 PM 21-Apr DXB  07:10 PM 25-Apr DXB 5H 35M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 22H 25M  BAH 1 Stop 10:35 PM 21-Apr DXB  12:55 PM 25-Apr DXB 1H 15M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 16H 5M  BAH 1 Stop 04:10 PM 21-Apr DXB  09:00 PM 25-Apr DXB 3H 50M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 20H 25M  BAH 1 Stop 08:15 PM 21-Apr DXB  09:00 PM 25-Apr DXB 3H 50M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 22H 25M  BAH 1 Stop 10:35 PM 21-Apr DXB  09:00 PM 25-Apr DXB 3H 50M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 4H 15M  BAH 1 Stop 04:15 AM 21-Apr DXB  10:20 AM 25-Apr DXB 3H 50M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 16H 5M  BAH 1 Stop 04:10 PM 21-Apr DXB  10:20 AM 25-Apr DXB 3H 50M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 20H 25M  BAH 1 Stop 08:15 PM 21-Apr DXB  10:20 AM 25-Apr DXB 3H 50M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 22H 25M  BAH 1 Stop 10:35 PM 21-Apr DXB  10:20 AM 25-Apr DXB 3H 50M  BAH 1 Stop 07:15 PM 25-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 4H 15M  BAH 1 Stop 04:15 AM 21-Apr DXB  07:10 PM 25-Apr DXB 5H 35M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Gulf Air Bahrain, Gulf Air Bahrain Refundable  08:55 PM 20-Apr KHI 16H 5M  BAH 1 Stop 04:10 PM 21-Apr DXB  07:10 PM 25-Apr DXB 5H 35M  BAH 1 Stop 05:50 AM 26-Apr KHI         Rs 140,717 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  10:30 PM 20-Apr KHI    Non-Stop 11:45 PM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  12:15 PM 20-Apr KHI    Non-Stop 01:20 PM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  02:45 AM 20-Apr KHI    Non-Stop 03:45 AM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  10:30 PM 20-Apr KHI    Non-Stop 11:45 PM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  12:15 PM 20-Apr KHI    Non-Stop 01:20 PM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  12:15 PM 20-Apr KHI    Non-Stop 01:20 PM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  10:30 PM 20-Apr KHI    Non-Stop 11:45 PM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  02:45 AM 20-Apr KHI    Non-Stop 03:45 AM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  02:45 AM 20-Apr KHI    Non-Stop 03:45 AM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  07:50 AM 25-Apr DXB    Non-Stop 10:55 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  06:00 PM 25-Apr DXB    Non-Stop 09:05 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  06:00 PM 25-Apr DXB    Non-Stop 09:05 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  10:30 PM 20-Apr KHI    Non-Stop 11:45 PM 20-Apr DXB  06:00 PM 25-Apr DXB    Non-Stop 09:05 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  06:00 PM 25-Apr DXB    Non-Stop 09:05 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  06:00 PM 25-Apr DXB    Non-Stop 09:05 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  12:15 PM 20-Apr KHI    Non-Stop 01:20 PM 20-Apr DXB  06:00 PM 25-Apr DXB    Non-Stop 09:05 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  02:45 AM 20-Apr KHI    Non-Stop 03:45 AM 20-Apr DXB  06:00 PM 25-Apr DXB    Non-Stop 09:05 PM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  07:50 AM 25-Apr DXB    Non-Stop 10:55 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  07:50 AM 25-Apr DXB    Non-Stop 10:55 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  10:30 PM 20-Apr KHI    Non-Stop 11:45 PM 20-Apr DXB  07:50 AM 25-Apr DXB    Non-Stop 10:55 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  07:50 AM 25-Apr DXB    Non-Stop 10:55 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  12:15 PM 20-Apr KHI    Non-Stop 01:20 PM 20-Apr DXB  07:50 AM 25-Apr DXB    Non-Stop 10:55 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  10:30 PM 20-Apr KHI    Non-Stop 11:45 PM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  02:45 AM 20-Apr KHI    Non-Stop 03:45 AM 20-Apr DXB  07:50 AM 25-Apr DXB    Non-Stop 10:55 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  12:15 PM 20-Apr KHI    Non-Stop 01:20 PM 20-Apr DXB  09:35 PM 25-Apr DXB    Non-Stop 12:50 AM 26-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  09:35 PM 25-Apr DXB    Non-Stop 12:50 AM 26-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  09:35 PM 25-Apr DXB    Non-Stop 12:50 AM 26-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  10:30 PM 20-Apr KHI    Non-Stop 11:45 PM 20-Apr DXB  09:35 PM 25-Apr DXB    Non-Stop 12:50 AM 26-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  09:35 PM 25-Apr DXB    Non-Stop 12:50 AM 26-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  09:35 PM 25-Apr DXB    Non-Stop 12:50 AM 26-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  02:45 AM 20-Apr KHI    Non-Stop 03:45 AM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  12:15 PM 20-Apr KHI    Non-Stop 01:20 PM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  02:45 AM 20-Apr KHI    Non-Stop 03:45 AM 20-Apr DXB  09:35 PM 25-Apr DXB    Non-Stop 12:50 AM 26-Apr KHI         Rs 168,093 BOOKME 1 Passenger(s)",
    "Qatar Airways, Oman Air Refundable  10:30 AM 20-Apr KHI 14H 5M10H 40M  DOHMCT 2 Stops 03:40 PM 21-Apr DXB  11:05 AM 25-Apr DXB 4H 30M3H 35M  MCTDOH 2 Stops 01:30 AM 26-Apr KHI         Rs 168,472 BOOKME 1 Passenger(s)",
    "Qatar Airways, Oman Air Refundable  10:30 AM 20-Apr KHI 14H 5M4H 50M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:05 AM 25-Apr DXB 4H 30M3H 35M  MCTDOH 2 Stops 01:30 AM 26-Apr KHI         Rs 168,472 BOOKME 1 Passenger(s)",
    "Qatar Airways, Oman Air Refundable  10:30 AM 20-Apr KHI 14H 5M4H 45M  DOHMCT 2 Stops 09:50 AM 21-Apr DXB  11:05 AM 25-Apr DXB 4H 30M3H 35M  MCTDOH 2 Stops 01:30 AM 26-Apr KHI         Rs 168,472 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 3H 0M4H 10M  DOHMCT 2 Stops 03:40 PM 20-Apr DXB  11:30 PM 25-Apr DXB 2H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 169,134 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 3H 0M4H 10M  DOHMCT 2 Stops 03:40 PM 20-Apr DXB  05:30 AM 25-Apr DXB 15H 5M  DOH 1 Stop 01:30 AM 26-Apr KHI         Rs 170,158 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 3H 0M4H 10M  DOHMCT 2 Stops 03:40 PM 20-Apr DXB  05:30 AM 25-Apr DXB 20H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 170,158 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 3H 0M4H 10M  DOHMCT 2 Stops 03:40 PM 20-Apr DXB  11:30 PM 25-Apr DXB 21H 5M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 170,158 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 3H 0M4H 10M  DOHMCT 2 Stops 03:40 PM 20-Apr DXB  11:55 PM 25-Apr DXB 1H 55M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 174,295 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 3H 0M4H 10M  DOHMCT 2 Stops 03:40 PM 20-Apr DXB  11:55 PM 25-Apr DXB 20H 35M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 175,319 BOOKME 1 Passenger(s)",
    "Qatar Airways, Oman Air Refundable  04:00 AM 20-Apr KHI 3H 0M4H 10M  DOHMCT 2 Stops 03:40 PM 20-Apr DXB  11:05 AM 25-Apr DXB 4H 30M3H 35M  MCTDOH 2 Stops 01:30 AM 26-Apr KHI         Rs 209,060 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:30 PM 25-Apr DXB 2H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 215,162 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:30 PM 25-Apr DXB 2H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 215,162 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  05:30 AM 25-Apr DXB 15H 5M  DOH 1 Stop 01:30 AM 26-Apr KHI         Rs 216,186 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:30 PM 25-Apr DXB 21H 5M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 216,186 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:30 PM 25-Apr DXB 21H 5M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 216,186 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  05:30 AM 25-Apr DXB 20H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 216,186 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  05:30 AM 25-Apr DXB 20H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 216,186 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  05:30 AM 25-Apr DXB 15H 5M  DOH 1 Stop 01:30 AM 26-Apr KHI         Rs 216,186 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:55 PM 25-Apr DXB 1H 55M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 220,323 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:55 PM 25-Apr DXB 1H 55M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 220,323 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:55 PM 25-Apr DXB 20H 35M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 221,347 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:55 PM 25-Apr DXB 20H 35M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 221,347 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 13H 40M  DOH 1 Stop 03:15 AM 21-Apr DXB  11:30 PM 25-Apr DXB 2H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 249,886 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 13H 40M  DOH 1 Stop 03:15 AM 21-Apr DXB  11:30 PM 25-Apr DXB 21H 5M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 250,910 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 13H 40M  DOH 1 Stop 03:15 AM 21-Apr DXB  05:30 AM 25-Apr DXB 20H 25M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 250,910 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 13H 40M  DOH 1 Stop 03:15 AM 21-Apr DXB  05:30 AM 25-Apr DXB 15H 5M  DOH 1 Stop 01:30 AM 26-Apr KHI         Rs 250,910 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 13H 40M  DOH 1 Stop 03:15 AM 21-Apr DXB  11:55 PM 25-Apr DXB 1H 55M  DOH 1 Stop 06:50 AM 26-Apr KHI         Rs 255,047 BOOKME 1 Passenger(s)",
    "Qatar Airways, Oman Air Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:05 AM 25-Apr DXB 4H 30M3H 35M  MCTDOH 2 Stops 01:30 AM 26-Apr KHI         Rs 255,099 BOOKME 1 Passenger(s)",
    "Qatar Airways, Oman Air Refundable  04:00 AM 20-Apr KHI 13H 45M  DOH 1 Stop 08:55 PM 20-Apr DXB  11:05 AM 25-Apr DXB 4H 30M3H 35M  MCTDOH 2 Stops 01:30 AM 26-Apr KHI         Rs 255,099 BOOKME 1 Passenger(s)",
    "Qatar Airways, Qatar Airways Refundable  10:30 AM 20-Apr KHI 13H 40M  DOH 1 Stop 03:15 AM 21-Apr DXB  11:55 PM 25-Apr DXB 20H 35M  DOH 1 Stop 01:30 AM 27-Apr KHI         Rs 256,071 BOOKME 1 Passenger(s)",
    "Qatar Airways, Oman Air Refundable  10:30 AM 20-Apr KHI 13H 40M  DOH 1 Stop 03:15 AM 21-Apr DXB  11:05 AM 25-Apr DXB 4H 30M3H 35M  MCTDOH 2 Stops 01:30 AM 26-Apr KHI         Rs 289,822 BOOKME 1 Passenger(s)",
    "Turkish Airlines, Turkish Airlines Refundable  05:55 AM 20-Apr KHI 9H 15M  IST 1 Stop 12:20 AM 21-Apr DXB  01:40 PM 25-Apr DXB 3H 45M  IST 1 Stop 04:25 AM 26-Apr KHI         Rs 492,379 BOOKME 1 Passenger(s)",
    "Turkish Airlines, Turkish Airlines Refundable  05:55 AM 20-Apr KHI 9H 15M  IST 1 Stop 12:20 AM 21-Apr DXB  07:35 AM 25-Apr DXB 10H 0M  IST 1 Stop 04:25 AM 26-Apr KHI         Rs 492,379 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  12:50 AM 25-Apr DXB    Non-Stop 04:00 AM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  07:20 AM 25-Apr DXB    Non-Stop 10:30 AM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:50 AM 20-Apr KHI    Non-Stop 06:05 AM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:30 AM 20-Apr KHI    Non-Stop 12:50 PM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  11:55 PM 20-Apr KHI    Non-Stop 01:10 AM 21-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  07:45 PM 25-Apr DXB    Non-Stop 10:55 PM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)",
    "Emirates, Emirates Refundable  04:35 PM 20-Apr KHI    Non-Stop 05:50 PM 20-Apr DXB  12:25 PM 25-Apr DXB    Non-Stop 03:35 PM 25-Apr KHI         Rs 901,585 BOOKME 1 Passenger(s)"
];

const data = result[122].split("  ").filter(value => value !== "");
const airwaysInfo = data[0].split(",");
const startTimeInfo = data[1].split(" ");
const costInfo = data[data.length - 1].split(' ');
const firstFlightEndTimeInfo = data[2].split(" ");
const firstFlightEndTimeInfoLenght = firstFlightEndTimeInfo.length;
const test1 = {
    airways: airwaysInfo[0],
    price: `${costInfo[1]} ${costInfo[2]}`,
    from: startTimeInfo[3],
    to: firstFlightEndTimeInfo[firstFlightEndTimeInfoLenght - 1],
    startDateAndTime: `${startTimeInfo[2]} ${startTimeInfo[0]} ${startTimeInfo[1]}`,
    endDateAndTime: `${firstFlightEndTimeInfo[firstFlightEndTimeInfoLenght - 2]} ${firstFlightEndTimeInfo[firstFlightEndTimeInfoLenght - 4]} ${firstFlightEndTimeInfo[firstFlightEndTimeInfoLenght - 3]}`,
    isTicketRefundable: airwaysInfo[1].split(" ")[airwaysInfo[1].split(" ").length - 1],
};

if (data[2].split(' ')[0] === "Non-Stop") {
    test1.numberOfStops = '0';
} else {
    test1.numberOfStops = data[2].split(' ')[1];
    const layoverPlaces = data[2].split(' ')[0];
    let layoverTime = startTimeInfo.filter((_, i) => i > 3).join('');
    for (let i = 1; i <= Number(test1.numberOfStops); i++) {
        const subStringLayoverTime = layoverTime.substring(0, layoverTime.indexOf('M') + 1).split('');
        subStringLayoverTime.splice(subStringLayoverTime.indexOf('H') + 1, 0, " ");
        layoverTime = layoverTime.replace(subStringLayoverTime.join(''), "");
        test1[`stop${i}Location`] = layoverPlaces.split('').splice(((i - 1) * 3), (i * 3)).join('');
        test1[`stop${i}Layover`] = subStringLayoverTime.join('');
    }
}

const secondAirwayInfo = airwaysInfo[1].trim().split(" ");
const secondAirwayStartTimeInfo = data[3].split(" ");
const endTimeInfo = data[data.length - 2].split(" ");
const endTimeInfoLenght = endTimeInfo.length;
const test2 = {
    airways: secondAirwayInfo.splice(0, secondAirwayInfo.length - 1).join(" "),
    price: `${costInfo[1]} ${costInfo[2]}`,
    from: secondAirwayStartTimeInfo[3],
    to: endTimeInfo[endTimeInfoLenght - 1],
    startDateAndTime: `${secondAirwayStartTimeInfo[2]} ${secondAirwayStartTimeInfo[0]} ${secondAirwayStartTimeInfo[1]}`,
    endDateAndTime: `${endTimeInfo[endTimeInfoLenght - 2]} ${endTimeInfo[endTimeInfoLenght - 4]} ${endTimeInfo[endTimeInfoLenght - 3]}`,
    isTicketRefundable: airwaysInfo[1].split(" ")[airwaysInfo[1].split(" ").length - 1],
}

if (data[4].split(' ')[0] === "Non-Stop") {
    test2.numberOfStops = '0';
} else {
    test2.numberOfStops = data[4].split(' ')[1];
    const layoverPlaces = data[4].split(' ')[0];
    let layoverTime = secondAirwayStartTimeInfo.filter((_, i) => i > 3).join('');
    for (let i = 1; i <= Number(test2.numberOfStops); i++) {
        const subStringLayoverTime = layoverTime.substring(0, layoverTime.indexOf('M') + 1).split('');
        layoverTime = layoverTime.replace(subStringLayoverTime.join(''), "");
        subStringLayoverTime.splice(subStringLayoverTime.indexOf('H') + 1, 0, " ");
        test2[`stop${i}Location`] = layoverPlaces.split('').splice(((i - 1) * 3), (i * 3)).join('');
        test2[`stop${i}Layover`] = subStringLayoverTime.join('');
    }
}
console.log(test1);
console.log(test2);
