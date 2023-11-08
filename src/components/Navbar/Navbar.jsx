import './navbar.css';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavToggle from "../NavToggle/NavToggle";

export default function Navbar() {
    return (
        <>
            {/* Menu btn to toggle navbar on mobile */}
            <NavToggle />

            <header className="primary-header" data-visible="false">
               
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="80.000000pt" viewBox="0 0 300.000000 400.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2460 3885 c0 -51 3 -65 15 -65 9 0 15 9 15 25 0 14 6 25 13 25 8 0
19 -11 25 -25 16 -34 36 -33 28 1 -4 15 -2 32 5 40 6 8 8 25 5 39 -6 23 -11
25 -56 25 l-50 0 0 -65z m81 30 c0 -5 -12 -11 -26 -13 -18 -2 -25 1 -25 13 0
12 7 15 25 13 14 -2 26 -7 26 -13z"/>
<path d="M2675 3928 c-2 -7 -8 -37 -13 -66 -10 -58 -17 -51 65 -68 12 -2 25 0
28 6 6 11 0 14 -48 25 -41 9 -28 30 16 27 47 -4 48 15 2 24 -46 8 -39 30 8 26
37 -3 60 13 30 22 -57 16 -83 17 -88 4z"/>
<path d="M2091 3895 c-31 -14 -33 -18 -28 -51 10 -58 32 -85 65 -78 44 11 55
24 48 62 -5 35 -31 82 -44 82 -4 -1 -22 -7 -41 -15z m57 -52 c13 -43 15 -39
-20 -48 -25 -6 -27 -4 -34 30 -5 27 -3 40 7 46 25 16 35 10 47 -28z"/>
<path d="M2880 3882 c0 -6 7 -15 15 -19 20 -12 -1 -83 -24 -80 -34 4 -19 -19
20 -32 44 -14 64 -7 37 13 -15 11 -16 18 -6 49 9 29 16 36 29 32 28 -9 32 14
4 25 -48 18 -75 22 -75 12z"/>
<path d="M1902 3820 c-18 -11 -32 -26 -32 -35 0 -26 33 -85 51 -90 26 -9 79
22 79 45 0 25 -11 25 -33 0 -9 -11 -23 -20 -30 -20 -14 0 -37 40 -37 65 0 15
34 30 49 20 5 -3 12 -1 16 4 3 6 -3 14 -13 20 -14 7 -27 5 -50 -9z"/>
<path d="M3051 3761 c-31 -60 -30 -90 0 -49 15 20 20 21 45 10 16 -8 31 -9 36
-4 5 5 -3 14 -21 22 -17 7 -31 19 -31 26 0 18 14 18 50 -1 20 -10 31 -12 35
-4 8 13 10 12 -42 38 l-43 21 -29 -59z"/>
<path d="M1722 3726 c-37 -27 -41 -41 -12 -41 11 0 29 -13 40 -29 18 -28 18
-30 2 -42 -31 -23 -1 -29 36 -7 40 22 62 64 24 44 -18 -9 -23 -6 -43 26 -16
25 -19 38 -11 41 13 4 17 32 5 32 -5 -1 -23 -12 -41 -24z"/>
<path d="M3221 3660 c-35 -52 -36 -77 -1 -45 18 17 21 17 46 0 17 -11 30 -13
36 -7 6 6 -2 16 -21 28 -21 14 -27 24 -22 33 7 11 15 9 40 -10 17 -12 34 -19
38 -15 9 9 -54 66 -72 66 -5 0 -25 -23 -44 -50z"/>
<path d="M1551 3591 l-35 -29 43 -51 c30 -36 47 -49 54 -42 7 7 5 17 -8 31
-15 16 -15 20 -3 25 8 3 26 1 41 -4 35 -14 47 5 13 21 -17 7 -26 19 -26 34 0
13 -9 28 -19 34 -25 13 -20 14 -60 -19z m52 -8 c8 -7 -21 -43 -35 -43 -12 0
-10 24 4 38 14 14 22 15 31 5z"/>
<path d="M1408 3445 c-16 -18 -28 -35 -28 -38 0 -3 23 -24 50 -47 56 -47 51
-48 97 18 23 34 5 41 -22 10 -13 -16 -29 -28 -35 -28 -17 0 -11 26 10 45 14
13 17 22 10 29 -7 7 -18 2 -34 -18 -30 -39 -47 -16 -18 24 19 25 20 41 3 39
-3 0 -18 -15 -33 -34z"/>
<path d="M1283 3263 l-21 -37 56 -34 56 -34 18 24 c34 44 33 60 -3 90 -47 40
-80 37 -106 -9z m78 0 c32 -19 34 -25 19 -53 -10 -19 -11 -19 -45 1 -39 23
-39 23 -25 50 13 23 15 23 51 2z"/>
<path d="M1195 3084 c-9 -25 -16 -47 -14 -48 8 -7 102 -46 111 -46 11 0 48 81
42 92 -10 16 -20 7 -33 -28 -7 -19 -18 -33 -24 -31 -13 5 -13 6 -2 50 10 37
-9 35 -25 -3 -7 -16 -16 -30 -20 -30 -16 0 -18 15 -5 45 12 31 11 45 -5 45 -4
0 -15 -21 -25 -46z"/>
<path d="M1131 2886 c-6 -25 -11 -47 -11 -49 0 -11 122 -29 131 -20 7 7 2 13
-16 17 -25 6 -27 10 -22 41 7 45 -18 49 -26 5 -4 -18 -13 -30 -22 -30 -15 0
-15 19 1 68 2 6 -3 12 -10 12 -8 0 -18 -19 -25 -44z"/>
<path d="M2590 2915 c0 -3 -43 -204 -95 -446 -52 -241 -95 -441 -95 -444 0
-16 31 -1 35 18 21 88 185 859 185 867 0 5 -7 10 -15 10 -8 0 -15 -2 -15 -5z"/>
<path d="M2122 2597 c-67 -67 -122 -127 -122 -132 0 -6 56 -66 125 -135 99
-99 127 -122 137 -112 10 10 -12 37 -105 130 l-117 117 115 115 c107 107 123
129 99 137 -5 2 -64 -52 -132 -120z"/>
<path d="M2754 2708 c-5 -7 38 -54 112 -124 l119 -113 -120 -120 c-95 -96
-117 -123 -107 -133 10 -10 39 14 142 117 l130 130 -127 127 c-70 71 -131 128
-135 128 -4 0 -10 -5 -14 -12z"/>
<path d="M3777 2463 c-4 -3 -7 -26 -7 -50 l0 -43 68 2 c37 0 52 3 35 5 -27 3
-33 9 -33 27 0 17 9 27 32 37 17 7 26 15 20 17 -6 2 -20 -1 -30 -7 -15 -8 -21
-7 -26 4 -5 15 -47 21 -59 8z m51 -46 c3 -34 1 -37 -22 -37 -23 0 -26 4 -26
33 0 38 7 49 30 45 9 -2 16 -16 18 -41z"/>
<path d="M3756 2258 c-17 -64 -10 -71 75 -83 l47 -7 7 42 c4 23 4 44 1 47 -3
3 -8 -13 -12 -36 -5 -31 -11 -41 -21 -37 -8 4 -19 6 -24 6 -6 0 -7 16 -4 38 5
27 4 33 -4 22 -6 -8 -11 -26 -11 -39 0 -17 -4 -22 -16 -17 -9 3 -20 6 -25 6
-5 0 -6 17 -3 40 7 43 0 55 -10 18z"/>
<path d="M3711 2059 c-6 -18 -11 -38 -11 -45 0 -13 108 -50 117 -40 3 3 -6 8
-21 12 -29 7 -30 11 -16 50 13 32 -2 54 -35 54 -17 0 -26 -9 -34 -31z m54 11
c4 -6 4 -24 0 -41 -6 -25 -10 -29 -28 -23 -29 9 -29 7 -16 42 11 32 32 42 44
22z"/>
<path d="M3635 1878 c-16 -39 -14 -43 35 -68 53 -27 67 -25 85 10 22 42 20 47
-25 70 -57 29 -78 26 -95 -12z m85 2 c45 -23 47 -29 21 -61 -17 -21 -21 -22
-49 -10 -46 19 -57 36 -44 66 14 30 22 31 72 5z"/>
<path d="M3520 1683 c0 -4 24 -24 52 -43 l51 -34 28 34 c16 18 26 36 23 39 -3
3 -15 -6 -26 -22 -24 -33 -31 -33 -71 -3 -44 32 -57 39 -57 29z"/>
<path d="M1575 1614 l27 -36 -33 -28 c-41 -35 -50 -36 -74 -10 -15 17 -16 22
-4 36 12 15 12 17 -1 12 -25 -8 -23 -42 4 -67 28 -26 31 -25 100 33 l29 24
-29 35 c-38 47 -54 47 -19 1z"/>
<path d="M3422 1577 l-32 -33 49 -48 49 -48 30 33 c17 19 28 36 25 39 -3 3
-16 -8 -29 -25 -22 -28 -24 -29 -41 -13 -16 17 -16 19 5 41 33 35 26 45 -8 12
-28 -27 -31 -28 -47 -12 -16 16 -15 19 12 47 16 16 26 32 24 35 -3 2 -20 -10
-37 -28z"/>
<path d="M1648 1477 c-46 -56 -57 -77 -24 -48 24 23 28 24 42 9 14 -13 15 -22
6 -47 -6 -17 -7 -31 -3 -31 5 0 12 11 15 25 4 15 14 25 24 25 22 0 42 19 42
40 0 8 -15 27 -34 42 l-33 26 -35 -41z m92 -26 c0 -5 -7 -14 -15 -21 -13 -11
-20 -9 -40 10 -19 18 -22 27 -14 42 10 18 11 18 40 -2 16 -12 29 -25 29 -29z"/>
<path d="M3320 1478 c0 -4 9 -22 19 -40 26 -44 30 -82 11 -86 -9 -1 -35 14
-59 35 -32 27 -41 31 -32 15 7 -12 30 -34 53 -48 36 -23 42 -24 56 -10 13 13
14 21 4 53 -11 34 -51 98 -52 81z"/>
<path d="M3130 1349 c-19 -12 -36 -23 -38 -24 -4 -4 32 -74 50 -98 13 -18 15
-18 51 3 21 13 36 25 33 27 -2 3 -19 -3 -36 -13 -27 -16 -32 -17 -40 -4 -15
23 -12 29 15 42 14 6 25 15 25 20 0 5 -14 1 -31 -8 -26 -13 -33 -14 -40 -2
-15 23 -10 35 21 48 17 7 30 16 30 21 0 12 0 12 -40 -12z"/>
<path d="M1806 1273 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"/>
<path d="M2943 1265 l-32 -15 22 -60 c12 -33 26 -60 30 -60 4 0 23 7 42 14 40
17 44 40 17 96 -20 40 -34 44 -79 25z m74 -50 c12 -36 12 -41 -4 -52 -31 -23
-50 -15 -67 30 -20 53 -20 54 2 60 39 11 55 2 69 -38z"/>
<path d="M2154 1175 c-11 -69 -5 -78 27 -49 17 15 19 14 25 -10 3 -14 10 -26
14 -26 10 0 52 121 45 128 -2 3 -7 -1 -10 -9 -2 -8 -11 -32 -19 -54 -13 -36
-16 -38 -22 -17 -8 27 -12 27 -37 5 -19 -18 -20 -17 -13 22 4 22 9 48 12 58 3
9 1 17 -4 17 -5 0 -13 -29 -18 -65z"/>
<path d="M2356 1178 c-3 -13 -6 -42 -6 -65 0 -40 2 -42 34 -49 19 -3 41 -4 48
-1 7 3 -6 8 -29 12 -37 7 -43 11 -43 32 0 23 2 24 41 18 29 -5 40 -4 35 4 -4
6 -20 11 -37 11 -25 0 -29 4 -29 26 0 25 2 25 41 19 29 -5 40 -4 35 4 -4 6
-24 11 -45 11 -32 0 -40 -4 -45 -22z"/>
<path d="M2544 1153 c3 -21 6 -50 6 -65 0 -26 3 -28 39 -28 51 0 62 15 54 78
l-6 52 -50 0 -50 0 7 -37z m84 5 c-2 -18 -11 -24 -35 -26 -30 -3 -33 -1 -33
22 0 23 4 26 36 26 31 0 35 -3 32 -22z m0 -60 c-2 -18 -11 -24 -35 -26 -30 -3
-33 -1 -33 22 0 23 4 26 36 26 31 0 35 -3 32 -22z"/>
</g>
</svg>

                

                <nav className="primary-navigation">
                    <ul>
                        <li className="nav-item">
                            <a href="#top">
                                Inizio
                                <div className='line'></div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#projects">
                                Progetti
                                <div className='line'></div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about">
                                Su di me
                                <div className='line'></div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}