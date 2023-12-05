// script.js
function generateMadlib() {
    const title = document.getElementById('title');
    const adjective = document.getElementById('adjective').value;
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;
    const place = document.getElementById('place').value;

    title.textContent = adjective + ' ' + noun;

    const madlibStory = `Once upon a time in a ${adjective} land, there were a group of curious ${noun}. They spent their days ${verb} through the ${place} and exploring the ${adjective} forests.

    One day, they discovered a ${adjective} cave that led to a ${place}. Inside, they found a ${noun} made entirely of ${adverb} sparkling crystals. Excitedly, they started ${verb} and couldn't believe their ${adjective} luck.

    As they continued their adventure, they encountered a ${adjective} creature that spoke in ${adverb} riddles. Determined to solve the mystery, they traveled to the top of the ${noun} and discovered a ${adjective} portal to another ${place}.

    In this new ${place}, they encountered even more ${noun}, each with its own ${adjective} charm. They spent their days ${verb} and nights ${verb} under the ${adverb} shining stars.

    And so, the adventure continued as they explored the wonders of the ${place}, always ready for the next ${adjective} surprise that awaited them.`;

    document.getElementById('madlibStory').textContent = madlibStory;
}
