var ds1 = {
	name: "Dark Souls",
	prefixes: ["**** ahead", "Be wary of ****", "Try ****", "Need ****", "Imminent ****...", "Weakness: ****", "****", "****?", "Good luck", "I did it!", "Here!", "I can't take this...", "Praise the Sun!"],
	prefixTypes: [0, 1, 1, 1, 1, 1, 2, 2, null, null, null, null, null], 
	suffixCategories: ["Characters", "Objects", "Techniques", "Actions", "Geography", "Orientation", "Body parts", "Attribute", "Concepts"],
	suffixes: [
			[
				["Enemy", "Tough enemy", "Hollow", "Soldier", "Knight", "Sniper", "Caster", "Giant", "Skeleton", "Ghost", "Bug", "Poision bug", "Lizard", "Drake", "Flier", "Golem", "Statue", "Monster", "Strange creature", "Demon", "Darkwraith", "Dragon", "Boss", "Saint", "Wretch", "Charmer", "Miscreant", "Liar", "Fatty", "Beanpole", "Merchant", "Blacksmith", "Master", "Prisoner"],
				["Amazing key", "Amazing treasure", "Amazing chest", "Amazing weapon", "Amazing armour", "Amazing item", "Amazing ring", "Amazing sorcery scroll", "Amazing pyromancy scroll", "Amazing miracle scroll", "Amazing ember", "Amazing trap"],
				["Close-ranged battle", "Ranged battle", "Eliminating one at a time", "Luring it out", "Beating to a pulp", "Lying in ambush", "Stealth", "Mimicry", "Pincer attack", "Hitting them in one swoop", "Fleeing", "Charging", "Stabbing in the back", "Sweeping attack", "Shield breaking", "Head shots", "Sorcery", "Pyromancy", "Miracles", "Jumping off", "Sliding down", "Dashing through"],
				["Rolling", "Backstepping", "Jumping", "Attacking", "Holding with both hands", "Kicking", "A plunging attack", "Blocking", "Parrying", "Locking-on"],
				["Path", "Hidden path", "Shortcut", "Detour", "Illusory wall", "Shortcut", "Dead end", "Swamp", "Lava", "Forest", "Cave", "Labyrinth", "Safe zone", "Danger zone", "Sniper spot", "Bright spot", "Dark spot", "Open area", "Tight spot", "Hiding place", "Exchange", "Gorgeous view", "Fall"],
				["Front", "Back", "Left", "Right", "Up", "Down", "Feet", "Head", "Back"],
				["Head", "Neck", "Stomach", "Back", "Arm", "Leg", "Heel", "Rear", "Tail", "Wings", "Anywhere"],
				["Strike", "Thrust", "Slash", "Magic", "Fire", "Lightning", "Critical hits", "Bleeding", "Poision", "Strong poison", "Curses", "Divine", "Occult", "Crystal"],
				["Chance", "Hint", "Secret", "Happiness", "Sorrow", "Life", "Death", "Undead", "Elation", "Grief", "Hope", "Despair", "Light", "Dark", "Bravery", "Resignation", "Comfort", "Tears"]
			],
			[
				["enemy", "tough enemy", "Hollow", "soldier", "knight", "sniper", "caster", "giant", "skeleton", "ghost", "bug", "poision bug", "lizard", "drake", "flier", "golem", "statue", "monster", "strange creature", "demon", "Darkwraith", "dragon", "boss", "saint", "wretch", "charmer", "miscreant", "liar", "fatty", "beanpole", "merchant", "blacksmith", "master", "prisoner"],
				["bonfire", "fog wall", "humanity", "lever", "switch", "key", "treasure", "chest", "weapon", "shield", "projectile", "armour", "item", "ring", "sorcery scroll", "pyromancy scroll", "miracle scroll", "ember", "trap", "covenant", "amazing key", "amazing treasure", "amazing chest", "amazing weapon", "amazing armour", "amazing item", "amazing ring", "amazing sorcery scroll", "amazing pyromancy scroll", "amazing miracle scroll", "amazing ember", "amazing trap"],
				["close-ranged battle", "ranged battle", "eliminating one at a time", "luring it out", "beating to a pulp", "lying in ambush", "stealth", "mimicry", "pincer attack", "hitting them in one swoop", "fleeing", "charging", "stabbing in the back", "sweeping attack", "shield breaking", "head shots", "sorcery", "pyromancy", "miracles", "jumping off", "sliding down", "dashing through"],
				["rolling", "backstepping", "jumping", "attacking", "holding with both hands", "kicking", "a plunging attack", "blocking", "parrying", "locking-on"],
				["path", "hidden path", "shortcut", "detour", "illusory wall", "shortcut", "dead end", "swamp", "lava", "forest", "cave", "labyrinth", "safe zone", "danger zone", "sniper spot", "bright spot", "dark spot", "open area", "tight spot", "hiding place", "exchange", "gorgeous view", "fall"],
				["Front", "Back", "Left", "Right", "Up", "Down", "feet", "head", "back"],
				["head", "neck", "stomach", "back", "arm", "leg", "heel", "rear", "tail", "wings", "anywhere"],
				["strike", "thrust", "slash", "magic", "fire", "lightning", "critical hits", "bleeding", "poision", "strong poison", "curses", "divine", "occult", "crystal"],
				["chance", "hint", "secret", "happiness", "sorrow", "life", "death", "Undead", "elation", "grief", "hope", "despair", "Light", "Dark", "bravery", "resignation", "comfort", "tears"]
			],
			[
				["Enemy", "Tough enemy", "Hollow", "Soldier", "Knight", "Sniper", "Caster", "Giant", "Skeleton", "Ghost", "Bug", "Poision bug", "Lizard", "Drake", "Flier", "Golem", "Statue", "Monster", "Strange creature", "Demon", "Darkwraith", "Dragon", "Boss", "Saint", "Wretch", "Charmer", "Miscreant", "Liar", "Fatty", "Beanpole", "Merchant", "Blacksmith", "Master", "Prisoner"],
				["Bonfire", "Fog wall", "Humanity", "Lever", "Switch", "Key", "Treasure", "Chest", "Weapon", "Shield", "Projectile", "Armour", "Item", "Ring", "Sorcery scroll", "Pyromancy scroll", "Miracle scroll", "Ember", "Trap", "Covenant", "Amazing key", "Amazing treasure", "Amazing chest", "Amazing weapon", "Amazing armour", "Amazing item", "Amazing ring", "Amazing sorcery scroll", "Amazing pyromancy scroll", "Amazing miracle scroll", "Amazing ember", "Amazing trap"],
				["Close-ranged battle", "Ranged battle", "Eliminating one at a time", "Luring it out", "Beating to a pulp", "Lying in ambush", "Stealth", "Mimicry", "Pincer attack", "Hitting them in one swoop", "Fleeing", "Charging", "Stabbing in the back", "Sweeping attack", "Shield breaking", "Head shots", "Sorcery", "Pyromancy", "Miracles", "Jumping off", "Sliding down", "Dashing through"],
				["Rolling", "Backstepping", "Jumping", "Attacking", "Holding with both hands", "Kicking", "A plunging attack", "Blocking", "Parrying", "Locking-on"],
				["Path", "Hidden path", "Shortcut", "Detour", "Illusory wall", "Shortcut", "Dead end", "Swamp", "Lava", "Forest", "Cave", "Labyrinth", "Safe zone", "Danger zone", "Sniper spot", "Bright spot", "Dark spot", "Open area", "Tight spot", "Hiding place", "Exchange", "Gorgeous view", "Fall"],
				["Front", "Back", "Left", "Right", "Up", "Down", "Feet", "Head", "Back"],
				["Head", "Neck", "Stomach", "Back", "Arm", "Leg", "Heel", "Rear", "Tail", "Wings", "Anywhere"],
				["Strike", "Thrust", "Slash", "Magic", "Fire", "Lightning", "Critical hits", "Bleeding", "Poision", "Strong poison", "Curses", "Divine", "Occult", "Crystal"],
				["Chance", "Hint", "Secret", "Happiness", "Sorrow", "Life", "Death", "Undead", "Elation", "Grief", "Hope", "Despair", "Light", "Dark", "Bravery", "Resignation", "Comfort", "Tears"]
			]
	]
};
