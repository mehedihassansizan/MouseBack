import React from "react";

const Features = () => {
  return (
  
    <div id="features" class="mx-auto font-mono max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl ">
          <span class="text-yellow-500">100%</span> Open-Source
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          No vendor lock-in.
          <br /> Deploy anywhere.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <a href="https://docs.opensaas.sh" class="group">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">🤝</div>
                </div>
                Open-Source Philosophy
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                The repo and framework are 100% open-source, and so are the
                services wherever possible. Still missing something? Contribute!
              </dd>
            </div>
          </a>
          <a
            href="https://docs.opensaas.sh/guides/authentication/"
            class="group"
          >
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">🔐</div>
                </div>
                DIY Auth, Done For You
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Pre-configured full-stack Auth that you own. No 3rd-party
                services or hidden fees.
              </dd>
            </div>
          </a>
          <a href="https://docs.opensaas.sh" class="group">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">🥞</div>
                </div>
                Full-stack Type Safety
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Full support for TypeScript with auto-generated types that span
                the whole stack. Nothing to configure!
              </dd>
            </div>
          </a>
          <a
            href="https://docs.opensaas.sh/guides/stripe-integration/"
            class="group"
          >
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">💸</div>
                </div>
                Stripe Integration
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                No SaaS is complete without payments. That's why subscriptions
                and the necessary webhooks are built-in.
              </dd>
            </div>
          </a>
          <a
            href="https://docs.opensaas.sh/general/admin-dashboard/"
            class="group"
          >
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">📈</div>
                </div>
                Admin Dashboard
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Graphs! Tables! Analytics w/ Plausible or Google! All in one
                place. Ooooooooooh.
              </dd>
            </div>
          </a>
          <a href="https://docs.opensaas.sh/start/guided-tour/" class="group">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">📝</div>
                </div>
                Blog w/ Astro
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Built-in blog with the Astro framework. Write your posts in
                Markdown, and watch your SEO performance take off.
              </dd>
            </div>
          </a>
          <a
            href="https://docs.opensaas.sh/guides/email-sending/"
            class="group"
          >
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">📧</div>
                </div>
                Email Sending
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Email sending built-in. Combine it with the cron jobs feature to
                easily send emails to your customers.
              </dd>
            </div>
          </a>
          <a href="https://docs.opensaas.sh" class="group">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">🤖</div>
                </div>
                OpenAI API Implemented
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                Have a sweet AI-powered app concept? Get your idea shipped to
                potential customers in days!
              </dd>
            </div>
          </a>
          <a href="https://docs.opensaas.sh/guides/deploying/" class="group">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">🚀 </div>
                </div>
                Deploy Anywhere. Easily.
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                No vendor lock-in because you own all your code. Deploy
                yourself, or let Wasp deploy it for you with a single command.
              </dd>
            </div>
          </a>
          <a href="https://docs.opensaas.sh" class="group">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7  group-hover:underline">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
                  <div class="text-2xl group-hover:opacity-80 ">🫂</div>
                </div>
                Complete Documentation &amp; Support
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                We don't leave you hanging. We have detailed docs and a Discord
                community to help!
              </dd>
            </div>
          </a>
        </dl>
      </div>
    </div>
  );
};

export default Features;
