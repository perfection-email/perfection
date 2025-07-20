from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

# Playful roasting categories
ROAST_CATEGORIES = {
    "habits": [
        "always takes forever to reply to texts",
        "thinks pineapple on pizza is a crime against humanity",
        "still uses Internet Explorer unironically",
        "pronounces 'gif' wrong (we all know which way)",
        "takes more selfies than a social media influencer",
        "still hasn't watched that show everyone recommended 3 years ago",
        "orders the same thing at every restaurant",
        "thinks they're a comedian but their jokes are dad-level",
        "has strong opinions about cereal brands",
        "still uses a phone from 2015 and calls it 'vintage'"
    ],
    "quirks": [
        "laughs at their own jokes before telling them",
        "has a weird obsession with organizing things by color",
        "makes sound effects when doing simple tasks",
        "talks to their plants (and expects answers)",
        "has a collection of something completely random",
        "does a little dance when nobody's watching",
        "makes faces in every mirror they pass",
        "has strong opinions about the 'right' way to load a dishwasher",
        "still counts on their fingers for basic math",
        "has a secret talent nobody knows about"
    ],
    "achievements": [
        "master of avoiding responsibilities",
        "professional procrastinator",
        "expert at finding the longest line at the store",
        "champion of starting projects and never finishing them",
        "guru of losing things in plain sight",
        "specialist in forgetting names 2 seconds after introductions",
        "artist of making simple tasks unnecessarily complicated",
        "wizard of getting lost with GPS",
        "ninja of accidentally liking old social media posts",
        "legend of burning water while cooking"
    ]
}

COMPLIMENT_ROASTS = [
    "is so smart they probably know why hot dogs come in packs of 10 but buns come in packs of 8",
    "is so cool they make ice cubes jealous",
    "is so funny they could make a comedian out of a tax form",
    "is so talented they could probably teach fish how to swim better",
    "is so organized they alphabetize their alphabet soup",
    "is so creative they turn grocery lists into poetry",
    "is so athletic they get tired watching sports on TV",
    "is so fashionable they make mannequins insecure",
    "is so tech-savvy they probably dream in binary code",
    "is so wise they give advice to fortune cookies"
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_roast')
def generate_roast():
    # Pick random category and roast
    category = random.choice(list(ROAST_CATEGORIES.keys()))
    roast = random.choice(ROAST_CATEGORIES[category])
    
    # Sometimes add a compliment roast instead
    if random.random() < 0.3:  # 30% chance
        roast = random.choice(COMPLIMENT_ROASTS)
        category = "compliment"
    
    return jsonify({
        'roast': roast,
        'category': category,
        'number': random.randint(1, 50)
    })

@app.route('/generate_list/<friend_name>')
def generate_list(friend_name):
    roasts = []
    for i in range(50):
        category = random.choice(list(ROAST_CATEGORIES.keys()))
        roast = random.choice(ROAST_CATEGORIES[category])
        
        # Mix in some compliment roasts
        if random.random() < 0.2:  # 20% chance
            roast = random.choice(COMPLIMENT_ROASTS)
        
        roasts.append(f"{i+1}. {friend_name} {roast}")
    
    return jsonify({'roasts': roasts, 'friend_name': friend_name})

if __name__ == '__main__':
    app.run(debug=True)
