import { ChevronDown } from "lucide-react";
import { useState } from "react";

const speciesData = {
  Dog: [
    'Affenpinscher', 'Afghan Hound', 'Airedale Terrier', 'Abash', 'Akita', 'Alaskan Malamute',
    'American Bulldog', 'American Bully', 'American Eskimo Dog', 'American Foxhound',
    'American Hairless Terrier', 'American Water Spaniel', 'Anatolian Shepherd', 'Appenzell Mountain Dog',
    'Ausiedoodle', 'Australian Cattle Dog/ Blue Heeler', 'Australian Kelpie', 'Australian Shepherd',
    'Australian Terrier', 'Azawakh', 'Barbet', 'Basenji', 'Basset Hound', 'Bavarian Mountain Hound',
    'Beagle', 'Beaglier', 'Bearded Collie', 'Beauceron', 'Bedlington Terrier', 'Belgian Shepherd/ Laekenois',
    'Belgian Shepherd/ Malinois', 'Belgian Shepherd Sheepdog', 'Belgian Shepherd/ Tervuren', 'Bergamasco',
    'Bernadoodle', 'Bernedoodle', 'Bernese Mountain Dog', 'Bichon Frise', 'Black and Tan Coonhound',
    'Black Labrador Retriever', 'Black Mouth Cur', 'Black Russian Terrier', 'Bloodhound', 'Blue Lacy',
    'Bluetick Coonhound', 'Boerboel', 'Bolognese', 'Borador', 'Border Collie', 'Border Terrier', 'Borzoi',
    'Boston Terrier', 'Bouvier des Flandres', 'Boxer', 'Boykin Spaniel', 'Bracco Italiano', 'Briard',
    'Brittany Spaniel', 'Brussels Griffon', 'Bull Terrier', 'Bulldog', 'Bullmastiff', 'Cairn Terrier',
    'Canaan Dog', 'Canadian Eskimo Dog', 'Cane Corse', 'Cardigan Welsh Corgi', 'Carolina Dog',
    'Catahoula Leopard Dog', 'Cattle Dog', 'Caucasian Sheepdog/ Caucasian Ovtcharka',
    'Cavalier King Charles Spaniel', 'Cavapoo', 'Cesky Terrier', 'Chesapeake Bay Retriever', 'Chihuahua',
    'Chinese Crested Dog', 'Chinese Foo Dog', 'Chinook', 'Chiweenie', 'Chocolate Labrador Retriever',
    'Chorkie', 'Chow Chow', 'Chug', 'Cirneco dell’Etna', 'Clumber Spaniel', 'Cockapoo', 'Cocker Spaniel',
    'Collie', 'Coonhound', 'Corgi', 'Coton de Tulear', 'Curly’ Coated Retriever', 'Dachshund',
    'Dachshund (Long Haired)', 'Dachshund (Miniature Long Haired)', 'Dalmatian', 'Dandie Dismount Terrier',
    'Doberman Pinscher', 'Dogo Argentino', 'Dogue de Bordeaux', 'Dutch Shepherd', 'English Bulldog',
    'English Cocker Spaniel', 'English Coonhound', 'English Foxhound', 'English Pointer', 'English Setter',
    'English Shepherd', 'English Springer Spaniel', 'English Toy Spaniel', 'Entlebucher', 'Eskimo Dog',
    'Estrela Mountain Dog', 'Eurasier', 'Feist', 'Field Spaniel', 'Fila Brasileiro', 'Finnish Lapphund',
    'Finnish Spitz', 'Flat-Coated Retriever', 'Fox Terrier', 'Foxhound', 'French Bulldog',
    'Galgo Spanish Greyhound', 'German Longhaired Pointer', 'German Pinscher', 'German Shepherd Dog',
    'German Shorthaired Pointer', 'German Spitz', 'German Wirehaired Pointer', 'Giant Schnauzer',
    'Glen of Imaal Terrier', 'Goldador', 'Golden Retriever', 'Goldendoodle', 'Gordon Setter', 'Great Dane',
    'Great Pyrenees', 'Greater Swiss Mountain Dog', 'Greyhound', 'Hamiltonstovare', 'Harrier', 'Havanese',
    'Hound', 'Hovawart', 'Husky', 'Ibizan Hound', 'Icelandic Sheepdog', 'Illyrian Sheepdog', 'Irish Setter',
    'Irish Terrier', 'Irish Water Spaniel', 'Irish Waterhound', 'Italian Greyhound', 'Jack Russell Terrrier',
    'Japanese Akita', 'Japanese Chin', 'Japanese Spitz', 'Jindo', 'Kai Dog', 'Karelian Bear Dog', 'Keeshond',
    'Kerry Blue Terrier', 'Kishu', 'Klee Kai', 'Komondor', 'Kooikerhoundje', 'Kuvasz', 'Kyi Leo', 'Labradoodle',
    'Lagotto Romagnolo', 'Lakeland Terrier', 'Lancashire Heeler', 'Leonberger', 'Lhasa Apso', 'Lawchen',
    'Lurcher', 'Malshi', 'Maltese', 'Maltipoo', 'Manchester Terrier', 'Maremma Sheepdog', 'Mastiff', 'McNab',
    'Miniature Bull Terrier', 'Miniature Dachshund', 'Miniature Pinscher', 'Miniature Poodle',
    'Miniature Schnauzer', 'Mixed Breed', 'Morkie', 'Mountain Cur', 'Mountain Dog', 'Munsterlander',
    'Neapolitan Mastiff', 'New Guinea Singing Dog', 'Newfoundland Dog', 'Norfolk Terrier', 'Norwegian Buhund',
    'Norwegian Elkhound', 'Norwegian Lundehund', 'Norwich Terrier', 'Nova Scotia Duck Tolling Retriever',
    'Old English Sheepdog', 'Otterhound', 'Papillon', 'Parson Russell Terrier', 'Patterdale Terrier/ Fell Terrier',
    'Pekingese', 'Pembroke Welsh Corgi', 'Peruvian Inca Orchid', 'Petit Basset Griffon Vendeen',
    'Pharaoh Hound', 'Picardy Sheepdog', 'Pit Bull Terrier', 'Plott Hound', 'Pointer',
    'Polish Lowland Sheepdog', 'Pomapoo', 'Pomeranian', 'Pomsky', 'Poodle', 'Poodle (Toy)', 'Portuguese Podengo',
    'Portuguese Water Dog', 'Presa Canario', 'Pug', 'Puggle', 'Puli', 'Pumi', 'Pyrenean Shepherd', 'Rat Terrier',
    'Redbone Coonhound', 'Retriever', 'Rhodesian Ridgeback', 'Rottweiler', 'Rough Collie', 'Russian Toy Dog',
    'Saint Bernard', 'Saluki', 'Samoyed', 'Sarplaninac', 'Schipperke', 'Schnauzer', 'Schnoodle',
    'Scottish Deerhound', 'Scottish Terrier', 'Setter', 'Share-Pei', 'Sheep Dog', 'Sheepadoodle', 'Shepherd',
    'Shetland Sheepdog/ Sheltie', 'Shiba Inu', 'Shih poo', 'Shih Tzu', 'Shollie', 'Shorkie', 'Siberian Husky',
    'Silky Terrier', 'Skye Terrier', 'Slooughi', 'Smooth Collie', 'Smooth Fox Terrier',
    'South Russian Ovtcharka', 'Spaniel', 'Spanish Water Dog', 'Spinone Italiano', 'Spitz',
    'Staffordshire Bull Terrier', 'Standard Poodle', 'Standard Schnauzer', 'Sussex Spaniel', 'Swedish Lapphund',
    'Swedish Vailhund', 'Tennessee Treeing Brindle', 'Terrier', 'Thai Ridgeback', 'Tibetan Mastiff',
    'Tibetan Spaniel', 'Tibetan Terrier', 'Tosa Inu', 'Toy Fox Terrier', 'Toy Manchester Terrier',
    'Treeing Walker Coonhound', 'Turkish Kangal', 'Vizsla', 'Weimaraner', 'Welsh Springer Spaniel',
    'Welsh Terrier', 'West Highlander White Terrier/ West', 'Wheaten Terrier', 'Whippet', 'White German Shepherd',
    'Wire Fox Terrier', 'Wirehaired Dachshund', 'Wirehaired Pointing Griffon', 'Wirehaired Terrier',
    'Wirehaired Vizsla', 'Xoloitzcuintli/ Mexican Hairless', 'Yellow Labrador Retriever', 'Yorkie Poo',
    'Yorkshire Terrier', 'Zuchon'
  ],
  Cat: [
    'Abyssinian', 'American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair',
    'Applpehead Siamese', 'Asian Cat', 'Australian Mist', 'Balinese', 'Bengal', 'Birman', 'Bombay',
    'British Longhair', 'British Shorthair', 'Burmese', 'Burmilla', 'Calico', 'Canadian Hairless',
    'Chartreux', 'Chausie', 'Cornish Rex', 'Cymric', 'Devon Rex', 'Dilute Calico', 'Dilute Tortoiseshell',
    'Domestic Long Hair', 'Domestic Medium Hair', 'Domestic Short Hair', 'Donskoy/ Russian Hairless',
    'Egyptian Mau', 'Exotic Shorthair', 'Extra-Toes Cat/ Hemingway Polydactyl', 'Havana', 'Highlander',
    'Highland Fold', 'Himalayan', 'Japanese Bobtail', 'Javanese', 'Khao Manee/ Diamond Eye', 'Korat',
    'LaPerm', 'Lykoi', 'Maine Coon', 'Manx', 'Minuet', 'Munchkin', 'Nibelung', 'Norwegian Forest Cat',
    'Ocicat', 'Oriental Long Hair', 'Oriental Short Hair', 'Oriental Tabby', 'Persian', 'Pixiebob',
    'Ragamuffin', 'Ragdoll', 'Russian Blue', 'Savannah', 'Scottish Fold', 'Selkirk Rex', 'Serengeti',
    'Siamese', 'Siberian', 'Silver', 'Singapura', 'Snowshoe', 'Somali', 'Sphynx/Hairless Cat', 'Tabby',
    'Tiger', 'Tontines', 'Tontines', 'Tortoiseshell', 'Toyger', 'Turkish Angora', 'Turkish Van',
    'Tuxedo', 'York Chocolate'
  ],
  Horse: [            
    'Andalusian', 'Appaloosa', 'Arabian', 'Belgian', 'Clydesdale', 'Connemara', 'Curly Horse', 'Donkey',
    'Draft', 'Fjord', 'Fresian', 'Gaited', 'Grade', 'Gypsy Vänner', 'Halflinger', 'Icelandic horse',
    'Lipizzan', 'Miniature Horse', 'Miniature Donkey', 'Missouri Foxtrotter', 'Morgan', 'Mule', 'Mustang',
    'Paint/Pinto', 'Paso Fino', 'Percheron', 'Peruvian Paso', 'Pony', 'Quaterhorse', 'Rocky Mountain Horse',
    'Saddlebred', 'Shetland Pony', 'Standardbred', 'Tennessee Walker', 'Thoroughbred', 'Warmblood',
    'Welsh Pony'
  ],
  Other:  ['Birds', 'Exotics', 'Reptiles', 'Fish', 'Pocket pals', 'Rabbits', 'Ferrets']
};

const PetFilters = ({ updateFilter }) => {
  const [selectedSpecie, setSelectedSpecie] = useState("");

  const handleSpecieChange = (e) => {
    const value = e.target.value;
    setSelectedSpecie(value);
    updateFilter("specie", value);
    updateFilter("breed", ""); // Reset breed when specie changes
  };

  // Get breeds based on selected specie
  const breedOptions = selectedSpecie ? speciesData[selectedSpecie] || [] : [];

  return (
    <div className="w-full md:w-1/4 bg-white p-6 rounded-md h-fit">
      <h2 className="text-3xl font-bold mb-6">Filters</h2>

      <div className="space-y-6">

        {/* Specie filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Specie</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={handleSpecieChange}
              value={selectedSpecie}
            >
              <option value="">All Species</option>
              {Object.keys(speciesData).map((specie) => (
                <option key={specie} value={specie}>
                  {specie}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* Breed filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Breed</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("breed", e.target.value)}
            >
              <option value="">All Breeds</option>
              {breedOptions.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* Size filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Size</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("size", e.target.value)}
            >
              <option value="">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* Gender filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Gender</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("gender", e.target.value)}
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* Shelter/Rescue filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Shelter or Rescue</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Shelter"
              className="w-full bg-[#f4f4f4] p-3 rounded-md pr-10"
              onChange={(e) => updateFilter("shelter", e.target.value)}
            />
            {/* No ChevronDown for input */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PetFilters;
