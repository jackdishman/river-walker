import GoFundMe from "./components/GoFundMe";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import HighlightMintCard from "./components/HighlightMintCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-teal-50">
      <div className="text-center mb-12 w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center">
          <Image
            src="/pfp.png"
            alt="River Walker"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="mt-5 sm:ml-4">
            <h1 className="text-3xl font-bold text-teal-600">
              Swampscott High School&apos;s 2024 Flag Football Game to Support a
              Local Family Battling Childhood Cancer
            </h1>
          </div>
        </div>
        <h2 className="text-lg font-bold text-teal-600 mt-5">
          On November 23, 2024 at 10am, Swampscott High School&apos;s Flag
          Football team will face Marblehead in a highly anticipated matchup in
          Swampscott. A portion of the proceeds will go to the Walker family,
          whose son, River, is courageously fighting medulloblastoma, a form of
          brain cancer, at St. Jude Children’s Research Hospital.
        </h2>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">
          About Medulloblastoma
        </h2>
        <p className="text-md text-teal-700">
          Medulloblastoma is a rare and aggressive brain and spinal cord cancer
          that affects fewer than 500 people in the United States annually. It
          originates in the cerebellum or posterior fossa, the part of the brain
          that controls balance, coordination, and other complex motor
          functions. It primarily impacts children and can spread rapidly.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">
          River&apos;s Story
        </h2>
        <h3 className="text-2xl text-teal-500 mt-2">Meet River Walker</h3>
        <p className="text-md text-teal-700 mt-2">
          River Walker is a brave and lively 2-year-old who loves Baby Shark
          videos and playing with his toys. In November 2023, just before
          Thanksgiving, River&apos;s world turned upside down when he was
          diagnosed with medulloblastoma. His parents, Meghan Fisher Walker and
          Frazer Walker, faced this devastating news with incredible strength
          and determination. Meghan, a 2013 Swampscott High School graduate, was
          on her way to her 10-year class reunion when River fell ill.
        </p>

        <div className="-mx-6 pb-5">
          <ImageCarousel
            imageUrls={[
              "/image1.png",
              "/image2.png",
              "/image3.png",
              "/image4.png",
              "/image5.png",
              "/image16.png",
              "/image17.png",
              "/image18.png",
              "/image19.png",
              "/image20.png",
            ]}
          />
        </div>

        <h3 className="text-2xl text-teal-500 mt-4">
          Timeline of River&apos;s Journey
        </h3>
        <ul className="list-disc list-inside text-md text-teal-700 mt-2 space-y-2">
          <li>
            <strong>November 2023:</strong> River was diagnosed with
            medulloblastoma in Miami, Florida. Emergency surgery was performed
            to remove part of the tumor, but some of it remained due to its
            location near critical brain structures.
          </li>
          <li>
            <strong>December 2023:</strong> River was accepted into a clinical
            trial at St. Jude&apos;s Hospital in Memphis, Tennessee. The family
            relocated from Florida to Memphis for his treatment. On December 13,
            River underwent another surgery to remove more of the tumor.
            Although the surgery was long and complex, most of the remaining
            tumor was successfully removed.
          </li>
          <li>
            <strong>January 2024:</strong> River started his chemotherapy
            regimen. The family moved into permanent housing provided by St.
            Jude&apos;s, allowing them to receive mail and support from the
            community.
          </li>
          <li>
            <strong>February 2024:</strong> River began his second cycle of
            chemotherapy. Despite needing blood transfusions, he showed
            incredible resilience, learning to walk again and maintaining his
            cheerful disposition.
          </li>
          <li>
            <strong>March 2024:</strong> An MRI showed no new tumor growth, a
            positive sign that the treatment was working. River continued
            chemotherapy and enjoyed visits from family, including his
            great-grandparents.
          </li>
          <li>
            <strong>April 2024:</strong> River reached the halfway point of his
            chemotherapy. His determination and spirit inspired everyone around
            him, and he charmed the staff at St. Jude&apos;s with his smiles and
            playful nature.
          </li>
          <li>
            <strong>May 2024:</strong> On May 16, River&apos;s twin brothers,
            Atlas and Sullivan, were born. Despite the challenges, River adapted
            well to being a big brother, showing curiosity and kindness towards
            the twins. Atlas had to undergo intestinal surgery at 1 month old,
            and the family also overcame COVID and most recently norovirus.
          </li>
          <li>
            <strong>September 2024:</strong> River is expected to complete his
            chemotherapy and begin radiation treatment as he turns three years
            old. The road ahead remains challenging, but River&apos;s courage
            and the support of his family and community provide strength for the
            future.
          </li>
        </ul>

        <h3 className="text-2xl text-teal-500 mt-4">Family Story</h3>
        <p className="text-md text-teal-700 mt-2">
          The Walker family has faced numerous challenges since River&apos;s
          diagnosis. Meghan, pregnant with twins, and Frazer, a ship engineer
          often at sea, had to make the difficult decision to relocate to
          Memphis for River&apos;s treatment. This move brought financial strain
          and disrupted their lives, but it was necessary to ensure River
          received the best possible care at St. Jude&apos;s. Despite these
          hardships, Meghan and Frazer have shown remarkable resilience and
          dedication to their son&apos;s fight against cancer.
        </p>
        <div className="-mx-6 pb-5">
          <ImageCarousel
            imageUrls={[
              "/image6.png",
              "/image7.png",
              "/image8.png",
              "/image9.png",
              "/image10.png",
              "/image11.png",
              "/image12.png",
              "/image13.png",
              "/image14.png",
              "/image15.png",
              "/image21.png",
              "/image22.png",
              "/image23.png",
              "/image24.png",
            ]}
          />
        </div>

        <p className="text-md text-teal-700 mt-2">
          Being away from family, especially Frazer&apos;s family in England,
          has been particularly tough. Their story is one of love, positivity,
          and unwavering determination. The support from friends, family, and
          the community has been invaluable, helping them navigate this
          difficult journey and providing the strength to face each new
          challenge.
        </p>
      </div>
      {/* Sponsors */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Sponsors</h2>
        <p className="text-md text-teal-700 mt-2">
          Please contact us if you would like to sponsor the event or donate:{" "}
          <a href="mailto:me@jackdishman.com" className="underline">
            me@jackdishman.com
          </a>{" "}
          or
          <a href="mailto:kzdish@gmail.com" className="underline">
            kzdish@gmail.com
          </a>
          .
        </p>
        <p className="text-md text-teal-700 mt-2">
          Company logos will be displayed on this website, on the back of the
          event t-shirts, and physically at the event.
        </p>
      </div>

      {/* to register */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">
          Donation Methods
        </h2>
        {/* <p className="text-md text-teal-700 mt-2">
          To register, please fill out this form and submit your donation of at
          least $25. Donations can be made through the GoFundMe below the form,
          cash or check at the time of race, or Venmo to @Kristen-Dishman. USDC
          / ETH donations to riverw.cb.id are also accepted! All proceeds will
          go towards River&apos;s medical expenses and support for his family
          during this challenging time.
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe88TZtjzZYcnioCvacCAdJKrPA27SkrMvdTmv83ZPmHabz4A/viewform?embedded=true"
          width="100%"
          height="600px"
        >
          Loading…
        </iframe> */}

        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row">
            <GoFundMe />
            <HighlightMintCard />
          </div>
        </div>
      </div>
    </main>
  );
}
