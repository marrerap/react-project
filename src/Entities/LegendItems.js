import LegendItem from "./LegendItem";

const legendItems = [
 new LegendItem(
     '75,000 +',
     '#741f1f',
     (cases) => cases >= 75_000,
     'white'
 ),
 new LegendItem(
    '60,000 - 74,999',
    '#9c2929',
    (cases) => cases >= 60_000 && cases <= 74_999,
    'white'
),
new LegendItem(
    '45,000 - 59,999',
    '#c57f7f',
    (cases) => cases >= 45_000 && cases <= 59_999,
    'white'
),
new LegendItem(
    '30,000 - 44,999',
    '#d8aaaa',
    (cases) => cases >= 30_000 && cases <= 44_999,
    
),
new LegendItem(
    '15,000 - 29,999',
    '#ebd4d4',
    (cases) => cases >= 15_000 && cases <= 29_999,
    
),
new LegendItem(
    '0 - 14,999',
    '#ffffff',
    (cases) => cases > 0 && cases <= 14_999,

),
 ];

export default legendItems

// 741f1f
// 9c2929
// 
// 
// 
// 