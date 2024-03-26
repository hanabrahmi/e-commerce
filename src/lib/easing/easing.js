const jswing = function (x) {
    return x;
};

const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const cos = Math.cos;
const PI = Math.PI;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * PI) / 3;
const c5 = (2 * PI) / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= (1.5 / d1)) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= (2.25 / d1)) * x + 0.9375;
    } else {
        return n1 * (x -= (2.625 / d1)) * x + 0.984375;
    }
}

// Étendre les fonctions d'animation
const easing = {
    def: 'easeOutQuad',
    swing: function (x) {
        return jswing(x);
    },
    easeInQuad: function (x) {
        return x * x;
    },
    easeOutQuad: function (x) {
        return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
        return x < 0.5 ?
            2 * x * x :
            1 - pow(-2 * x + 2, 2) / 2;
    },
    // Les autres fonctions d'animation peuvent être déclarées de la même manière
    // Assurez-vous de vérifier les conversions pour chacune d'elles
};

// Dans votre composant React
export default function MyComponent() {
    // Placez le code de votre composant ici
    // Assurez-vous d'appeler cette fonction dans votre application React
    return null; // Remplacez cela par le contenu de votre composant
}


