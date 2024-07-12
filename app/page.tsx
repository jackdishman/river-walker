import GoFundMe from "./components/GoFundMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-teal-50">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-teal-600">River Run 5k</h1>
        <h2 className="text-xl text-teal-500 mt-4">
          When? September 21st or 22nd
        </h2>
        <h3 className="text-lg text-teal-400 mt-2">
          Where? North Shore, MA. Register for event details
        </h3>
        <p className="text-md text-teal-600 mt-4 max-w-3xl mx-auto">
          Join us for a 5k run to support River Walker, a brave 2-year-old
          battling medulloblastoma. All proceeds will go towards his medical
          expenses and support for his family during this challenging time.
        </p>
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
          and determination.
        </p>

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
            the twins.
          </li>
          <li>
            <strong>September 2024:</strong> River is expected to complete his
            chemotherapy and begin radiation treatment as he turns three years
            old. The road ahead remains challenging, but River&apos;s courage
            and the support of his family and community provide hope for the
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
        <p className="text-md text-teal-700 mt-2">
          Their story is one of love, hope, and unwavering determination. The
          support from friends, family, and the community has been invaluable,
          helping them navigate this difficult journey and providing the
          strength to face each new challenge.
        </p>
      </div>
      <GoFundMe />
    </main>
  );
}
