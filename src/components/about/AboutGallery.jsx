import Image from 'next/image'
import clsx from 'clsx'

import { FadeIn } from '@/components/about/FadeIn'
import portraitImage from '@/images/portrait.jpg'
import image1 from '@/images/photos/image-1.jpg'
import image4 from '@/images/photos/image-4.jpg'

const images = [image1, image4, portraitImage]
const rotations = ['rotate-2', '-rotate-2', 'rotate-2']

export function AboutGallery() {
  return (
    <FadeIn>
      <div className="flex gap-4 overflow-x-auto pb-4 lg:block lg:overflow-hidden lg:pb-0">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-square flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800',
              'w-40 sm:w-52 lg:mb-6 lg:w-full lg:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </FadeIn>
  )
}
