<template>
  <Layout>
    <div class="container max-w-screen-md mx-auto">
      <h1>{{ $t("titles.about-us") }}</h1>      

      <h3>{{ $t('headings.translations')}}</h3>
      <p>
        {{ $t('translations')}}
      </p>

      <pre>{        
  "en-US": {
    "headings": {
      ...
      "translations": "How translate your content"
    },
    "translations": "Translations are managed in a flexible way. 
    You can organize your contents each in its folder, with a file for each supported locale;
    or use the SFC (single file component) layout, using an i18n block which define local translations (as on this page).",
    "tailwind": "This boilerplate uses Tailwind 2, installed as a postcss plugin, as recommended."
  },
  "it-IT": {    
    "headings": {
      ...
      "translations": "Come tradurre il tuo contenuto"
    },
    ...
}
</pre>

      <h3>{{ $t('headings.tailwind')}}</h3>
      <p>
        {{ $t('tailwind') }}
      </p>
      
    </div>
  </Layout>
</template>

<i18n>
{
  "en-US": {
    "headings": {
      "translations": "How translate your content",
      "tailwind": "Tailwind as PostCSS plugin"
    },
    "translations": "Translations are managed in a flexible way, to be albe to adapt to specific needs or personal preferences. 
    You can organize your contents each in its folder, with a file for each supported locale (index.en.md,m index.it.md,...);
    or use the SFC (single file component) layout, using an i18n block which define local translations (as on this page, for example).",
    "tailwind": "This boilerplate uses Tailwind 2, installed as a postcss plugin, as recommended."
  },
  "it-IT": {
    "headings": {
      "translations": "Come tradurre il contenuto",
      "tailwind": "Tailwind come plugin PostCSS"
    },
    "translations": "Le traduzioni sono gestite con molta flessibilità, potendo adattarsi a stili diversi e/o necessità specifiche. 
    È possibile organizzare le traduzioni sotto la stella cartella, per esempio, con un file specifico a ogni locale configurato (index.en.md, index.it.md,...);
    O si può utillizare il layout SFC (single file component), usando un blocco i18n (come per esempio questa pagina).",    
    "tailwind": "Questa boilerplate usa Tailwind 2, configurato come un plugin di postcss, come reaccomandato."
  },
  "pt-BR": {
    "headings": {
      "translations": "How translations are managed",
      "tailwind": "Tailwind como plugin PostCSS"
    },
    "translations": "Translations are managed in a flexible way. 
    You can organize your contents each in its folder, with a file for each supported locale;
    or use the SFC (single file component) layout, using an i18n block which define local translations.",    
    "tailwind": "Esta boilerplate usa Tailwind 2, configurado como um plugin de postcss, como recomendado."
  }
}
</i18n>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>
