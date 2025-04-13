<template>
  <div class="flex flex-col justify-between h-dvh">
    <Navbar />
    <div class="container mx-auto sm:px-0 px-3 grow py-3">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
