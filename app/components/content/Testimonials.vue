<script setup lang="ts">
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}
interface Props {
  list?: ReviewProps[];
}
const props = withDefaults(defineProps<Props>(), {
  list: () => [
    {
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      userName: "Product Manager",
      comment:
        "Wow Vue + Shadcn-Vue is awesome!. This template lets me change colors, fonts and images to match my brand identity. ",
      rating: 5.0,
    },
    {
      image: "https://github.com/shadcn.png",
      name: "Sophia Collins",
      userName: "Cybersecurity Analyst",
      comment:
        "They have the best collection of Advanced templates for your Nuxt Project. I really like this template. It's so easy to use and customize.",
      rating: 4.8,
    },

    {
      image: "https://github.com/shadcn.png",
      name: "Adam Johnson",
      userName: "Chief Technology Officer",
      comment:
        "I was looking for a example of the integration with Better Auth and I found it here. It's so easy to use and customize.",
      rating: 4.9,
    },
    {
      image: "https://github.com/shadcn.png",
      name: "Ethan Parker",
      userName: "Data Scientist",
      comment:
        "All the reviews are false. I've never seen anything like this before. It's amazing. I love it.",
      rating: 3.0,
    },
    {
      image: "https://github.com/shadcn.png",
      name: "Ava Mitchell",
      userName: "IT Project Manager",
      comment:
        "Just wasting my time. I can't believe that I spend the last 4 hours looking at the project.",
      rating: 1.0,
    },
    {
      image: "https://github.com/shadcn.png",
      name: "Isabella Reed",
      userName: "DevOps Engineer",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 1.9,
    },
  ],
});
const { list } = toRefs(props);
</script>

<template>
  <section id="testimonials" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        <ContentSlot :use="$slots.title" unwrap="p"> Testimonials </ContentSlot>
      </h2>

      <h3 class="text-3xl md:text-4xl text-center font-bold mb-4">
        <ContentSlot :use="$slots.subtitle" unwrap="p">
          Hear What Our 1000+ Clients Say
        </ContentSlot>
      </h3>
      <p class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        <ContentSlot :use="$slots.description" unwrap="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, odit
          similique quasi sint reiciendis quidem iure veritatis optio facere tenetur.
        </ContentSlot>
      </p>
    </div>

    <UiCarousel :opts="{
      align: 'start',
    }" class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
      <UiCarouselContent>
        <UiCarouselItem v-for="review in list" :key="review.name" class="md:basis-1/2 lg:basis-1/3">
          <UiCard class="bg-muted/50 dark:bg-card">
            <UiCardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-primary text-primary" v-for="n in Math.round(review.rating)" :key="n" />
              </div>

              "{{ review.comment }}"
            </UiCardContent>

            <UiCardHeader>
              <div class="flex flex-row items-center gap-4">
                <UiAvatar>
                  <UiAvatarImage src="https://www.radix-vue.com/logo.svg" alt="@radix-vue" />
                  <UiAvatarFallback>SV</UiAvatarFallback>
                </UiAvatar>

                <div class="flex flex-col">
                  <UiCardTitle class="text-lg">{{ review.name }}</UiCardTitle>
                  <UiCardDescription>{{ review.userName }}</UiCardDescription>
                </div>
              </div>
            </UiCardHeader>
          </UiCard>
        </UiCarouselItem>
      </UiCarouselContent>
      <UiCarouselPrevious />
      <UiCarouselNext />
    </UiCarousel>
  </section>
</template>
