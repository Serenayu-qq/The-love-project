let texts = [];
let numTexts = 50; // 增加文字数量，覆盖整个屏幕
let words = ["— Alia Stearns, 41, She/Her, Bi, Open Relationship With Boyfriend", "— Alice, 30, Unsure, Queer, Boo’d Up", "Olivia, 22, She/Her, Heterosexual, Single", "K, 31, She/Her, Queer, Domestic Partnership", "Cortne B, 25, She/Her, Straight, In a Relationship", 
             " Eric Mersmann, 40, He/Him, Bi, Married", "Hellion, 27, She/Her, Queer, In Love", "Alaina Leary, 25, She/They, Queer, Engaged", "Anna Swenson, 28, She/Her, Queer, Married", " Elizabeth, 27, She/Her, Queer",
             "Christian, 34, She/Her, Straight-ish, Terminally Single", " Joy Overbrook, 30, She/Her, Pansexual, Married", "Rho Rho, 94, She/Her, Widowed", "Wandy Felicita Ortiz, 23, She/Her, Heterosexual, In a Relationship", "Artemis, 22, She/Her, Asexual/Homoromantic, Engaged", 
             "— Skye Sherman, 25, She/Her, Heterosexual, Married", "Kate, 27, She/Her, Bisexual, Married", "Lilly Harlow, 37, She/Her, Straight, Committed Relationship", "Ashley, 24, She/Her, Pansexual, In a Relationship", "Liz Sheeley, 29, She/Her, Straight, Single"];

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);

    for (let i = 0; i < numTexts; i++) {
        let x = random(width); // 随机分布文字位置，填满屏幕
        let speed = random(1, 4); // 每段文字有不同的速度
        texts.push(new FallingText(words[i % words.length], x, speed));
    }
}

function draw() {
    background(0);
    for (let t of texts) {
        t.update();
        t.display();
    }
}

class FallingText {
    constructor(content, x, speed) {
        this.lines = content.split(""); // 文字按字符拆分，每个字符独立一行
        this.x = x;
        this.y = -random(100, 300); // 随机初始化位置
        this.speed = speed;
        this.lineSpacing = 30; // 每行字符的间距
    }

    update() {
        this.y += this.speed;
        if (this.y > height + this.lineSpacing * this.lines.length) {
            this.y = -random(100, 300);
            this.x = random(width); // 重新随机X轴位置
        }
    }

    display() {
        push();
        translate(this.x, this.y);
        // 文字 90° 旋转
        for (let i = 0; i < this.lines.length; i++) {
            text(this.lines[i], 0, i * this.lineSpacing);
        }
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
