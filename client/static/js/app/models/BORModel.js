define([], function () {

    var BORModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('nom.model.BORModel'),
        defaults: function() {
            return {
                "RecipeID": 672330,
                "Title": "Spaghetti Squash Au Gasd",
                "Description": "Spaghetti Squash Au Gratin Tastes like Hash Brown Casserole without all the calories and carbs",
                "Cuisine": null,
                "Category": "Side Dish",
                "Subcategory": "Casseroles",
                "PrimaryIngredient": "Spaghetti Squash",
                "StarRating": 4,
                "WebURL": "http://www.bigoven.com/recipe/spaghetti-squash-au-gratin/672330",
                "ImageURL": "http://mda.bigoven.com/pics/spaghetti-squash-au-gratin-8.jpg",
                "ReviewCount": 4,
                "MedalCount": 0,
                "FavoriteCount": 102,
                "Poster": {
                    "UserID": 1769905,
                    "UserName": "vaughtvl",
                    "ImageURL48": "http://www.bigoven.com/pics/avatarsquare/48/vaughtvl.jpg",
                    "IsPremium": true,
                    "IsKitchenHelper": false,
                    "PremiumExpiryDate": "/Date(1417269848000)/",
                    "MemberSince": "/Date(1352987700000)/",
                    "IsUsingRecurly": true
                },
                "Ingredients": [
                    {
                        "IngredientID": 6790402,
                        "DisplayIndex": 0,
                        "IsHeading": false,
                        "Name": "med spaghetti squash",
                        "HTMLName": "med spaghetti <a href=\"http://www.bigoven.com/glossary/squash\" class=\"glosslink\">squash</a>",
                        "Quantity": 1,
                        "DisplayQuantity": "1",
                        "Unit": null,
                        "MetricQuantity": 1,
                        "MetricDisplayQuantity": "1",
                        "MetricUnit": "",
                        "PreparationNotes": null,
                        "IngredientInfo": {
                            "Name": "med spaghetti squash",
                            "Department": "Produce"
                        },
                        "IsLinked": true
                    },
                    {
                        "IngredientID": 6790403,
                        "DisplayIndex": 1,
                        "IsHeading": false,
                        "Name": "butter",
                        "HTMLName": "<a href=\"http://www.bigoven.com/glossary/butter\" class=\"glosslink\">butter</a>",
                        "Quantity": 2,
                        "DisplayQuantity": "2",
                        "Unit": "tablespoons",
                        "MetricQuantity": 30,
                        "MetricDisplayQuantity": "30",
                        "MetricUnit": "ml",
                        "PreparationNotes": null,
                        "IngredientInfo": {
                            "Name": "butter",
                            "Department": "Dairy"
                        },
                        "IsLinked": true
                    },
                    {
                        "IngredientID": 6790404,
                        "DisplayIndex": 2,
                        "IsHeading": false,
                        "Name": "Yellow onion ",
                        "HTMLName": "Yellow <a href=\"http://www.bigoven.com/glossary/onion\" class=\"glosslink\">onion</a> ",
                        "Quantity": 1,
                        "DisplayQuantity": "1",
                        "Unit": "small",
                        "MetricQuantity": 1,
                        "MetricDisplayQuantity": "1",
                        "MetricUnit": "small",
                        "PreparationNotes": "thinly sliced",
                        "IngredientInfo": {
                            "Name": "Yellow onion ",
                            "Department": "Produce"
                        },
                        "IsLinked": true
                    },
                    {
                        "IngredientID": 6790405,
                        "DisplayIndex": 3,
                        "IsHeading": false,
                        "Name": "thyme",
                        "HTMLName": "<a href=\"http://www.bigoven.com/glossary/thyme\" class=\"glosslink\">thyme</a>",
                        "Quantity": 1,
                        "DisplayQuantity": "1",
                        "Unit": "teaspoon",
                        "MetricQuantity": 4.92892158321706,
                        "MetricDisplayQuantity": "5",
                        "MetricUnit": "ml",
                        "PreparationNotes": null,
                        "IngredientInfo": {
                            "Name": "thyme",
                            "Department": "Produce"
                        },
                        "IsLinked": true
                    },
                    {
                        "IngredientID": 6790406,
                        "DisplayIndex": 4,
                        "IsHeading": false,
                        "Name": "sour cream",
                        "HTMLName": "<a href=\"http://www.bigoven.com/glossary/sour%20cream\" class=\"glosslink\">sour cream</a>",
                        "Quantity": 0.5,
                        "DisplayQuantity": "1/2",
                        "Unit": "cup",
                        "MetricQuantity": 118,
                        "MetricDisplayQuantity": "118",
                        "MetricUnit": "ml",
                        "PreparationNotes": null,
                        "IngredientInfo": {
                            "Name": "sour cream",
                            "Department": "Dairy"
                        },
                        "IsLinked": true
                    },
                    {
                        "IngredientID": 6790407,
                        "DisplayIndex": 5,
                        "IsHeading": false,
                        "Name": "cheddar cheese",
                        "HTMLName": "<a href=\"http://www.bigoven.com/glossary/cheddar%20cheese\" class=\"glosslink\">cheddar cheese</a>",
                        "Quantity": 0.5,
                        "DisplayQuantity": "1/2",
                        "Unit": "cup",
                        "MetricQuantity": 118,
                        "MetricDisplayQuantity": "118",
                        "MetricUnit": "ml",
                        "PreparationNotes": "shredded",
                        "IngredientInfo": {
                            "Name": "cheddar cheese",
                            "Department": "Cheeses"
                        },
                        "IsLinked": true
                    },
                    {
                        "IngredientID": 6790408,
                        "DisplayIndex": 6,
                        "IsHeading": false,
                        "Name": "Red pepper flakes",
                        "HTMLName": "<a href=\"http://www.bigoven.com/glossary/red%20pepper%20flakes\" class=\"glosslink\">Red pepper flakes</a>",
                        "Quantity": 0.25,
                        "DisplayQuantity": "1/4",
                        "Unit": "teaspoon",
                        "MetricQuantity": 1.23223039580426,
                        "MetricDisplayQuantity": "1",
                        "MetricUnit": "ml",
                        "PreparationNotes": null,
                        "IngredientInfo": {
                            "Name": "Red pepper flakes",
                            "Department": "Spices"
                        },
                        "IsLinked": true
                    }
                ],
                "Instructions": " Cut the spaghetti squash in half and remove the seeds. Place in a covered dish with a ¼ inch of water and microwave for 10 -12 minutes. \r\n\r\nIn a medium sized skillet over medium heat, add the butter, onions, red pepper and thyme and cook until the onions are slightly brown in color. Salt and pepper to taste. \r\n\r\nUsing a fork, scrape the insides of the squash and transfer to a small bowl. Combine the squash, onions, sour cream and half the cheese together and mix well. Transfer the mixture to a buttered baking dish and top with remaining cheese. \r\n\r\nPlace into a 375º for 15 – 20 minutes until golden brown on top",
                "YieldNumber": 6,
                "YieldUnit": "Servings",
                "TotalMinutes": 45,
                "ActiveMinutes": 15,
                "NutritionInfo": {
                    "SingularYieldUnit": "Paid API plan required for nutrition.",
                    "TotalCalories": 0,
                    "TotalFat": 0,
                    "CaloriesFromFat": 0,
                    "TotalFatPct": 0,
                    "SatFat": 0,
                    "SatFatPct": 0,
                    "MonoFat": 0,
                    "PolyFat": 0,
                    "TransFat": 0,
                    "Cholesterol": 0,
                    "CholesterolPct": 0,
                    "Sodium": 0,
                    "SodiumPct": 0,
                    "Potassium": 0,
                    "PotassiumPct": 0,
                    "TotalCarbs": 0,
                    "TotalCarbsPct": 0,
                    "DietaryFiber": 0,
                    "DietaryFiberPct": 0,
                    "Sugar": 0,
                    "Protein": 0,
                    "ProteinPct": 0
                },
                "IsPrivate": false,
                "CreationDate": "/Date(1382617897000)/",
                "LastModified": "/Date(1413960460707)/",
                "IsBookmark": false,
                "BookmarkURL": null,
                "BookmarkSiteLogo": "",
                "BookmarkImageURL": null,
                "IsRecipeScan": null,
                "MenuCount": 0,
                "NotesCount": 1,
                "AdTags": null,
                "IngredientsTextBlock": null,
                "AllCategoriesText": "",
                "IsSponsored": false,
                "VariantOfRecipeID": null,
                "Collection": null,
                "AdminBoost": null,
                "VerifiedDateTime": "/Date(1412827781777)/",
                "MaxImageSquare": 256,
                "ImageSquares": [
                    256,
                    200,
                    128,
                    120,
                    64,
                    48,
                    36,
                    16
                ],
                "VerifiedByClass": "helper"
            };
        }
    });

    return BORModel;

});
