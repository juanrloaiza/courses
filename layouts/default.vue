<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container pt-6">
        <div class="columns">
            <div class="column is-one-quarter">
                <Navbar />
            </div>
            <div class="column"> 
                <slot />
            </div>
        </div>
</div>
</body>
</html>
</template>