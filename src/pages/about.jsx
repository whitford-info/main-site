import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Michael Whitford</title>
        <meta
          name="description"
          content="I’m Michael Whitford. I live in Overland Park KS, where I push data around to discover amazing things."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Michael Whitford. I live in Overland Park KS, where I push data around to discover amazing things.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum, orci non pellentesque volutpat, mauris turpis fringilla est, sed venenatis enim risus nec magna. Integer id posuere ligula. Cras elementum faucibus ipsum, vitae ornare nulla vehicula in. Donec felis nulla, tempor nec congue a, posuere laoreet enim. Integer suscipit a est at tempus. Aenean scelerisque ipsum ut arcu pulvinar, eu consequat elit vulputate. Pellentesque vitae mi enim. Cras vehicula tortor eget pulvinar semper. Nulla tristique nibh dui, sed blandit mauris dignissim nec. Phasellus eget iaculis nisi, non dignissim turpis. Fusce in ante turpis. Cras sit amet lectus egestas, pulvinar nisl et, pretium leo. Curabitur porttitor tincidunt est, vitae mattis orci venenatis in.
              </p>
              <p>
                Pellentesque vitae nulla neque. Ut at accumsan arcu, a aliquet neque. Aenean ligula tellus, lacinia vel semper vehicula, interdum sed nunc. Aenean imperdiet blandit magna, nec semper justo pretium ut. Nullam id ipsum nisl. Suspendisse et orci nisl. Nulla eget mauris non nulla suscipit interdum ac a ex. Etiam dictum sem non mauris auctor, sed fermentum arcu hendrerit. Integer luctus mi id orci tincidunt, in suscipit eros dictum. Aenean eu varius lorem, sit amet dignissim velit. Donec eget feugiat ante. Fusce hendrerit scelerisque hendrerit. Nullam consectetur congue accumsan.
              </p>
              <p>
                Phasellus sollicitudin laoreet nibh, in semper nulla feugiat id. Phasellus blandit arcu leo, eu tempor sem luctus quis. Phasellus scelerisque non ligula ac dapibus. Aenean eget ligula arcu. Morbi dignissim sodales libero, sit amet eleifend nunc. Sed blandit consequat tincidunt. Duis vitae mollis mauris.
              </p>
              <p>
                Duis leo quam, malesuada vitae pellentesque eu, tempor sed quam. Cras vitae tempus erat, et faucibus sem. Donec magna ligula, scelerisque volutpat purus at, lacinia porttitor metus. Nam vel mauris orci. Morbi rutrum nibh nec massa placerat aliquam. Curabitur ac tempor est. Praesent semper ipsum mi, finibus porttitor ipsum interdum in. Mauris quis nisi porttitor, consectetur erat eget, gravida leo. Nam varius in turpis in laoreet. Cras ante ante, dictum in purus a, semper varius orci. Proin varius vel mauris non mollis. Proin dapibus purus ut aliquam egestas. Etiam tincidunt, tortor quis pulvinar auctor, metus diam tristique purus, sit amet mattis nisl est vel lorem. Sed non vehicula lorem, tincidunt volutpat elit. Proin rutrum tortor eu turpis tristique sollicitudin. Nam fermentum, nisl sed volutpat auctor, nulla neque convallis dui, vitae porta arcu massa vel nisl.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/Audeon/" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/michael-whitford/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:Michael@whitford.info"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Michael@Whitford.info
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
