function situationChange() {
  const situation = document.getElementsByName('situation');
  document.getElementById('friendPhysY').style.display = 'none';
  document.getElementById('friendPhysH').style.display = 'none';
  document.getElementById('friendMagicY').style.display = 'none';
  document.getElementById('friendMagicH').style.display = 'none';
  document.getElementById('friendH').style.display = 'none';
  document.getElementById('enemyPhysY1').style.display = 'none';
  document.getElementById('enemyPhys').style.display = 'none';
  document.getElementById('enemyPhysY2').style.display = 'none';
  document.getElementById('enemyPhysH').style.display = 'none';
  document.getElementById('enemyMagicY').style.display = 'none';
  document.getElementById('enemyMagicH').style.display = 'none';
  document.getElementById('enemyY').style.display = 'none';
  document.getElementById('resultPhysY').style.display = 'none';
  document.getElementById('resultPhysH').style.display = 'none';
  document.getElementById('resultMagicY').style.display = 'none';
  document.getElementById('resultMagicH').style.display = 'none';
  if (situation[0].checked) {
    document.getElementById('friendPhysY').style.display = 'block';
    document.getElementById('enemyPhysY1').style.display = 'block';
    document.getElementById('enemyPhys').style.display = 'block';
    document.getElementById('enemyPhysY2').style.display = 'block';
    document.getElementById('enemyY').style.display = 'block';
    document.getElementById('resultPhysY').style.display = 'block';
  } else if (situation[1].checked) {
    document.getElementById('friendPhysH').style.display = 'block';
    document.getElementById('friendH').style.display = 'block';
    document.getElementById('enemyPhys').style.display = 'block';
    document.getElementById('enemyPhysH').style.display = 'block';
    document.getElementById('resultPhysH').style.display = 'block';
  } else if (situation[2].checked) {
    document.getElementById('friendMagicY').style.display = 'block';
    document.getElementById('enemyMagicY').style.display = 'block';
    document.getElementById('enemyY').style.display = 'block';
    document.getElementById('resultMagicY').style.display = 'block';
  } else if (situation[3].checked) {
    document.getElementById('friendMagicH').style.display = 'block';
    document.getElementById('friendH').style.display = 'block';
    document.getElementById('enemyMagicH').style.display = 'block';
    document.getElementById('resultMagicH').style.display = 'block';
  }
  result();
}

function friendPhysYAtackChange() {
  const friendPhysYAtack = document.getElementById('friendPhysYAtack').value.split(';');
  if (friendPhysYAtack[0] != 'unselected') {
    document.getElementById('friendPhysYAtackAtk').value = friendPhysYAtack[0];
    document.getElementById('friendPhysYAtackPower').value = friendPhysYAtack[1];
    document.getElementById('resultPhysYTimes').innerText = friendPhysYAtack[2];
    document.getElementById('resultPhysYNote').innerText = friendPhysYAtack[3];
  } else {
    document.getElementById('resultPhysYTimes').innerText = '-';
    document.getElementById('resultPhysYNote').innerText = '-';
  }
  result();
}

let friendPhysYElemDamageSaved = new Array(12).fill('');

function friendPhysYElemDamageChange() {
  const friendPhysYElemDamage = document.getElementById('friendPhysYElemDamage').value;
  const enemyPhysElemIndex = document.getElementById('enemyPhysElem').selectedIndex;
  if (enemyPhysElemIndex != 0) {
    friendPhysYElemDamageSaved[enemyPhysElemIndex] = friendPhysYElemDamage;
  }
  result();
}

let friendPhysYTypeDamageSaved = new Array(12).fill('');

function friendPhysYTypeDamageChange() {
  const friendPhysYTypeDamage = document.getElementById('friendPhysYTypeDamage').value;
  const enemyPhysTypeIndex = document.getElementById('enemyPhysType').selectedIndex;
  if (enemyPhysTypeIndex != 0) {
    friendPhysYTypeDamageSaved[enemyPhysTypeIndex] = friendPhysYTypeDamage;
  }
  result();
}

let friendHElemResistSaved = new Array(12).fill('');

function friendPhysHElemResistChange() {
  const friendPhysHElemResist = document.getElementById('friendPhysHElemResist').value;
  const enemyPhysHAtackElemIndex = document.getElementById('enemyPhysHAtackElem').selectedIndex;
  const enemyMagicHAtackElemIndex = document.getElementById('enemyMagicHAtackElem').selectedIndex;
  if (enemyPhysHAtackElemIndex != 0) {
    friendHElemResistSaved[enemyPhysHAtackElemIndex] = friendPhysHElemResist;
    if (enemyPhysHAtackElemIndex == enemyMagicHAtackElemIndex) {
      document.getElementById('friendMagicHElemResist').value = friendPhysHElemResist;
    }
  }
  result();
}

let friendPhysHTypeResistSaved = new Array(12).fill('');

function friendPhysHTypeResistChange() {
  const friendPhysHTypeResist = document.getElementById('friendPhysHTypeResist').value;
  const enemyPhysTypeIndex = document.getElementById('enemyPhysType').selectedIndex;
  if (enemyPhysTypeIndex != 0) {
    friendPhysHTypeResistSaved[enemyPhysTypeIndex] = friendPhysHTypeResist;
  }
  result();
}

function friendPhysHPetrifyChange() {
  const enemyMagicHAtackElemIndex = document.getElementById('enemyMagicHAtackElem').selectedIndex;
  if (document.getElementById('friendPhysHPetrify').checked == true) {
    document.getElementById('friendMagicHStatusAilment').selectedIndex = 6;
    if (enemyMagicHAtackElemIndex == 6) {
      document.getElementById('friendMagicHAilmentElem').checked = true;
    } else {
      document.getElementById('friendMagicHAilmentElem').checked = false;
    }
  } else {
    document.getElementById('friendMagicHStatusAilment').selectedIndex = 0;
    if (enemyMagicHAtackElemIndex == 11) {
      document.getElementById('friendMagicHAilmentElem').checked = true;
    } else {
      document.getElementById('friendMagicHAilmentElem').checked = false;
    }
  }
  result();
}

function friendMagicYAtackChange() {
  const friendMagicYAtack = document.getElementById('friendMagicYAtack').value.split(';');
  const friendMagicYAtackIndex = document.getElementById('friendMagicYAtack').selectedIndex;
  if (friendMagicYAtack[0] != 'unselected') {
    document.getElementById('friendMagicYAtackPower').value = friendMagicYAtack[0];
    document.getElementById('friendMagicYAtackElem').selectedIndex = friendMagicYAtack[1];
    document.getElementById('resultMagicYTimes').innerText = friendMagicYAtack[2];
    document.getElementById('resultMagicYNote').innerText = friendMagicYAtack[3];
    document.getElementById('friendMagicYSkillPower').value = friendMagicYSkillPowerSaved[friendMagicYAtackIndex];
    friendMagicYAtackElemChange();
    friendMagicYSkillPowerChange();
  } else {
    document.getElementById('resultMagicYTimes').innerText = '-';
    document.getElementById('resultMagicYNote').innerText = '-';
  }
  result();
}

function friendMagicYAtackElemChange() {
  const friendMagicYAtackElemIndex = document.getElementById('friendMagicYAtackElem').selectedIndex;
  const enemy = document.getElementById('enemy').value.split(';');
  if (friendMagicYAtackElemIndex == 0) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '属性耐性:';
  } else if (friendMagicYAtackElemIndex == 1) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '無属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '無属性耐性:';
  } else if (friendMagicYAtackElemIndex == 2) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '火属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '火属性耐性:';
  } else if (friendMagicYAtackElemIndex == 3) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '氷属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '氷属性耐性:';
  } else if (friendMagicYAtackElemIndex == 4) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '雷属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '雷属性耐性:';
  } else if (friendMagicYAtackElemIndex == 5) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '水属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '水属性耐性:';
  } else if (friendMagicYAtackElemIndex == 6) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '風属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '風属性耐性:';
  } else if (friendMagicYAtackElemIndex == 7) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '地属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '地属性耐性:';
  } else if (friendMagicYAtackElemIndex == 8) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '光属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '光属性耐性:';
  } else if (friendMagicYAtackElemIndex == 9) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '闇属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '闇属性耐性:';
  } else if (friendMagicYAtackElemIndex == 10) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '命属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '命属性耐性:';
  } else if (friendMagicYAtackElemIndex == 11) {
    document.getElementById('friendMagicYElemPowerHeading').innerText = '滅属性魔法威力増減:';
    document.getElementById('enemyMagicYElemResistHeading').innerText = '滅属性耐性:';
  }
  if (friendMagicYAtackElemIndex != 0) {
    document.getElementById('friendMagicYElemPower').value = friendMagicYElemPowerSaved[friendMagicYAtackElemIndex];
    if (enemy[0] != 'unselected') {
      document.getElementById('enemyMagicYElemResist').value = enemy[friendMagicYAtackElemIndex + 8];
    }
    friendMagicYElemPowerChange();
    enemyMagicYElemResistChange();
  }
  enemyMagicYStatusAilmentChange();
  result();
}

let friendMagicYElemPowerSaved = new Array(12).fill('');

function friendMagicYElemPowerChange() {
  const friendMagicYElemPower = document.getElementById('friendMagicYElemPower').value;
  const friendMagicYAtackElemIndex = document.getElementById('friendMagicYAtackElem').selectedIndex;
  if (friendMagicYAtackElemIndex != 0) {
    friendMagicYElemPowerSaved[friendMagicYAtackElemIndex] = friendMagicYElemPower;
  }
  result();
}

let friendMagicYSkillPowerSaved = new Array(200).fill(''); 

function friendMagicYSkillPowerChange() {
  const friendMagicYSkillPower = document.getElementById('friendMagicYSkillPower').value;
  const friendMagicYAtackIndex = document.getElementById('friendMagicYAtack').selectedIndex;
  if (friendMagicYAtackIndex != 0) {
    friendMagicYSkillPowerSaved[friendMagicYAtackIndex] = friendMagicYSkillPower;
  }
  result();
}

function friendMagicHElemResistChange() {
  const friendMagicHElemResist = document.getElementById('friendMagicHElemResist').value;
  const enemyPhysHAtackElemIndex = document.getElementById('enemyPhysHAtackElem').selectedIndex;
  const enemyMagicHAtackElemIndex = document.getElementById('enemyMagicHAtackElem').selectedIndex;
  if (enemyMagicHAtackElemIndex != 0) {
    friendHElemResistSaved[enemyMagicHAtackElemIndex] = friendMagicHElemResist;
    if (enemyPhysHAtackElemIndex == enemyMagicHAtackElemIndex) {
      document.getElementById('friendPhysHElemResist').value = friendMagicHElemResist;
    }
  }
  result();
}

let friendMagicHElemDamageSaved = new Array(12).fill('');

function friendMagicHElemDamageChange() {
  const friendMagicHElemDamage = document.getElementById('friendMagicHElemDamage').value;
  const enemyMagicHAtackElemIndex = document.getElementById('enemyMagicHAtackElem').selectedIndex;
  if (enemyMagicHAtackElemIndex != 0) {
    friendMagicHElemDamageSaved[enemyMagicHAtackElemIndex] = friendMagicHElemDamage;
  }
  result();
}

function friendMagicHStatusAilmentChange() {
  const friendMagicHStatusAilmentIndex = document.getElementById('friendMagicHStatusAilment').selectedIndex;
  const enemyMagicHAtackElemIndex = document.getElementById('enemyMagicHAtackElem').selectedIndex;
  if (friendMagicHStatusAilmentIndex == 6) {
    document.getElementById('friendPhysHPetrify').checked = true;
  } else {
    document.getElementById('friendPhysHPetrify').checked = false;
  }
  if (enemyMagicHAtackElemIndex != 0) {
    if (friendMagicHStatusAilmentIndex == 0) {
      if (enemyMagicHAtackElemIndex == 11) {
        document.getElementById('friendMagicHAilmentElem').checked = true;
      } else {
        document.getElementById('friendMagicHAilmentElem').checked = false;
      }
    } else if (enemyMagicHAtackElemIndex == friendMagicHStatusAilmentIndex + (friendMagicHStatusAilmentIndex % 2) * 2) {
      document.getElementById('friendMagicHAilmentElem').checked = true;
    } else {
      document.getElementById('friendMagicHAilmentElem').checked = false;
    }
  }
  result();
}

function enemyChange() {
  const enemy = document.getElementById('enemy').value.split(';');
  const friendMagicYAtackElemIndex = document.getElementById('friendMagicYAtackElem').selectedIndex;
  if (enemy[0] != 'unselected') {
    document.getElementById('enemyPhysElem').selectedIndex = enemy[0];
    document.getElementById('enemyPhysType').selectedIndex = enemy[1];
    document.getElementById('enemyPhysYDef').value = enemy[3];
    document.getElementById('enemyPhysHAtk').value = enemy[4];
    document.getElementById('enemyMagicYRes').value = enemy[5];
    document.getElementById('enemyMagicHMag').value = enemy[6];
    document.getElementById('enemyPhysYBlo').value = enemy[7];
    document.getElementById('enemyPhysHCri').value = enemy[8];
    document.getElementById('enemyPhysYNeResist').value = enemy[9];
    enemyPhysElemChange();
    enemyPhysTypeChange();
    if (friendMagicYAtackElemIndex != 0) {
      document.getElementById('enemyMagicYElemResist').value = enemy[friendMagicYAtackElemIndex + 8];
    }
  }
  result();
}

function enemyPhysElemChange() {
  const enemyPhysElemIndex = document.getElementById('enemyPhysElem').selectedIndex;
  if (enemyPhysElemIndex == 0) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 1) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対無属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 2) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対火属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 3) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対氷属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 4) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対雷属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 5) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対水属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 6) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対風属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 7) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対地属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 8) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対光属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 9) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対闇属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 10) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対命属性ダメージ増減:';
  } else if (enemyPhysElemIndex == 11) {
    document.getElementById('friendPhysYElemDamageHeading').innerText = '対滅属性ダメージ増減:';
  }
  if (enemyPhysElemIndex != 0) {
    document.getElementById('friendPhysYElemDamage').value = friendPhysYElemDamageSaved[enemyPhysElemIndex];
    friendPhysYElemDamageChange();
  }
  result();
}

function enemyPhysTypeChange() {
  const enemyPhysTypeIndex = document.getElementById('enemyPhysType').selectedIndex;
  if (enemyPhysTypeIndex == 0) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対種族ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '種族耐性増減:';
  } else if (enemyPhysTypeIndex == 1) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対人型ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '人型耐性増減:';
  } else if (enemyPhysTypeIndex == 2) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対スライム族ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = 'スライム耐性増減:';
  } else if (enemyPhysTypeIndex == 3) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対魔獣ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '魔獣耐性増減:';
  } else if (enemyPhysTypeIndex == 4) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対有翼ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '有翼耐性増減:';
  } else if (enemyPhysTypeIndex == 5) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対昆虫ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '昆虫耐性増減:';
  } else if (enemyPhysTypeIndex == 6) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対水棲ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '水棲耐性増減:';
  } else if (enemyPhysTypeIndex == 7) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対植物ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '植物耐性増減:';
  } else if (enemyPhysTypeIndex == 8) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対ドラゴン族ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = 'ドラゴン耐性増減:';
  } else if (enemyPhysTypeIndex == 9) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対魔法生物ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '魔法生物耐性増減:';
  } else if (enemyPhysTypeIndex == 10) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対非実体ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '非実体耐性増減:';
  } else if (enemyPhysTypeIndex == 11) {
    document.getElementById('friendPhysYTypeDamageHeading').innerText = '対無機ダメージ増減:';
    document.getElementById('friendPhysHTypeResistHeading').innerText = '無機耐性増減:';
  }
  if (enemyPhysTypeIndex != 0) {
    document.getElementById('friendPhysYTypeDamage').value = friendPhysYTypeDamageSaved[enemyPhysTypeIndex];
    document.getElementById('friendPhysHTypeResist').value = friendPhysHTypeResistSaved[enemyPhysTypeIndex];
    friendPhysYTypeDamageChange();
    friendPhysHTypeResistChange();
  }
  result();
}

function enemyPhysYNeResistChange() {
  const enemyPhysYNeResist = document.getElementById('enemyPhysYNeResist').value;
  const friendMagicYAtackElemIndex = document.getElementById('friendMagicYAtackElem').selectedIndex;
  if (friendMagicYAtackElemIndex == 1) {
    document.getElementById('enemyMagicYElemResist').value = enemyPhysYNeResist;
  }
  result();
}

function enemyPhysYPetrifyChange() {
  if (document.getElementById('enemyPhysYPetrify').checked == true) {
    document.getElementById('enemyMagicYStatusAilment').selectedIndex = 6;
  } else {
    document.getElementById('enemyMagicYStatusAilment').selectedIndex = 0;
  }
  enemyMagicYStatusAilmentChange();
  result();
}

function enemyPhysHAtackChange() {
  const enemyPhysHAtack = document.getElementById('enemyPhysHAtack').value.split(';');
  if (enemyPhysHAtack[0] != 'unselected') {
    document.getElementById('enemyPhysHAtackAtk').value = enemyPhysHAtack[0];
    document.getElementById('enemyPhysHAtackPower').value = enemyPhysHAtack[1];
    document.getElementById('enemyPhysHAtackElem').selectedIndex = enemyPhysHAtack[2];
    document.getElementById('resultPhysHTimes').innerText = enemyPhysHAtack[3];
    document.getElementById('resultPhysHNote').innerText = enemyPhysHAtack[4];
    enemyPhysHAtackElemChange();
  } else {
    document.getElementById('resultPhysHTimes').innerText = '-';
    document.getElementById('resultPhysHNote').innerText = '-';
  }
  result();
}

function enemyPhysHAtackElemChange() {
  const enemyPhysHAtackElemIndex = document.getElementById('enemyPhysHAtackElem').selectedIndex;
  if (enemyPhysHAtackElemIndex == 0) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 1) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '無属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 2) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '火属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 3) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '氷属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 4) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '雷属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 5) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '水属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 6) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '風属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 7) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '地属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 8) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '光属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 9) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '闇属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 10) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '命属性耐性:';
  } else if (enemyPhysHAtackElemIndex == 11) {
    document.getElementById('friendPhysHElemResistHeading').innerText = '滅属性耐性:';
  }
  if (enemyPhysHAtackElemIndex != 0) {
    document.getElementById('friendPhysHElemResist').value = friendHElemResistSaved[enemyPhysHAtackElemIndex];
    friendPhysHElemResistChange();
  }
  result();
}

function enemyMagicYElemResistChange() {
  const enemyMagicYElemResist = document.getElementById('enemyMagicYElemResist').value;
  const friendMagicYAtackElemIndex = document.getElementById('friendMagicYAtackElem').selectedIndex;
  if (friendMagicYAtackElemIndex == 1) {
    document.getElementById('enemyPhysYNeResist').value = enemyMagicYElemResist;
  }
  result();
}

function enemyMagicYStatusAilmentChange() {
  const enemyMagicYStatusAilmentIndex = document.getElementById('enemyMagicYStatusAilment').selectedIndex;
  if (enemyMagicYStatusAilmentIndex == 6) {
    document.getElementById('enemyPhysYPetrify').checked = true;
  } else {
    document.getElementById('enemyPhysYPetrify').checked = false;
  }
  if (document.getElementById('friendMagicYAtackElem').selectedIndex != 0) {
    if (enemyMagicYStatusAilmentIndex == 0) {
      if (document.getElementById('friendMagicYAtackElem').selectedIndex == 11) {
        document.getElementById('enemyMagicYAilmentElem').checked = true;
      } else {
        document.getElementById('enemyMagicYAilmentElem').checked = false;
      }
    } else if (document.getElementById('friendMagicYAtackElem').selectedIndex ==
               enemyMagicYStatusAilmentIndex + (enemyMagicYStatusAilmentIndex % 2) * 2) {
      document.getElementById('enemyMagicYAilmentElem').checked = true;
    } else {
      document.getElementById('enemyMagicYAilmentElem').checked = false;
    }
  }
  result();
}

function enemyMagicHAtackChange() {
  const enemyMagicHAtack = document.getElementById('enemyMagicHAtack').value.split(';');
  if (enemyMagicHAtack[0] != 'unselected') {
    document.getElementById('enemyMagicHAtackPower').value = enemyMagicHAtack[0];
    document.getElementById('enemyMagicHAtackElem').selectedIndex = enemyMagicHAtack[1];
    document.getElementById('resultMagicHTimes').innerText = enemyMagicHAtack[2];
    document.getElementById('resultMagicHNote').innerText = enemyMagicHAtack[3];
    enemyMagicHAtackElemChange();
  } else {
    document.getElementById('resultMagicHTimes').innerText = '-';
    document.getElementById('resultMagicHNote').innerText = '-';
  }
  result();
}

function enemyMagicHAtackElemChange() {
  const enemyMagicHAtackElemIndex = document.getElementById('enemyMagicHAtackElem').selectedIndex;
  if (enemyMagicHAtackElemIndex == 0) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 1) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '無属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '無属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 2) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '火属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '火属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 3) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '氷属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '氷属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 4) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '雷属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '雷属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 5) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '水属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '水属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 6) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '風属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '風属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 7) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '地属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '地属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 8) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '光属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '光属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 9) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '闇属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '闇属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 10) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '命属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '命属性ダメージ増減:';
  } else if (enemyMagicHAtackElemIndex == 11) {
    document.getElementById('friendMagicHElemResistHeading').innerText = '滅属性耐性:';
    document.getElementById('friendMagicHElemDamageHeading').innerText = '滅属性ダメージ増減:';
  }
  if (enemyMagicHAtackElemIndex != 0) {
    document.getElementById('friendMagicHElemResist').value = friendHElemResistSaved[enemyMagicHAtackElemIndex];
    document.getElementById('friendMagicHElemDamage').value = friendMagicHElemDamageSaved[enemyMagicHAtackElemIndex];
    friendMagicHElemResistChange();
    friendMagicHElemDamageChange();
  }
  friendMagicHStatusAilmentChange();
  result();
}

function calcPhysYDamage(critical, rand, atk, atackAtk, atackPower, elemDamage, typeDamage, def, neResist, petrify, balanceBreak) {
  const def_ = Math.trunc(def * (balanceBreak / 100));
  const atk_ = Math.trunc(Math.trunc(atk * (critical / 100)) * (atackAtk / 100));
  let d;
  if (atk_ + Math.trunc(def_ / 2) == 0) {
    d = atk_ - atk_ * Math.trunc(def_ / 2) - Math.trunc(def_ / 6);
  } else {
    d = atk_ - Math.trunc(atk_ * Math.trunc(def_ / 2) / (atk_ + Math.trunc(def_ / 2))) - Math.trunc(def_ / 6);
  }
  if (d < 0) {
    d = 0;
  }
  const s = Math.trunc(d * (atackPower / 100));
  const r = Math.trunc(s * (neResist / 100)) + Math.trunc(s * ((elemDamage + typeDamage + petrify) / 100));
  return Math.trunc(r * rand);
}

function calcPhysHDamage(critical, guard, rand, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower) {
  const def_ = Math.trunc(def * (balanceBreak / 100));
  const atk_ = Math.trunc(atk * (atackAtk / 100));
  let d;
  if (atk_ + Math.trunc(def_ / 2) == 0) {
    d = atk_ - atk_ * Math.trunc(def_ / 2) - Math.trunc(def_ / 7);
  } else {
    d = atk_ - Math.trunc(atk_ * Math.trunc(def_ / 2) / (atk_ + Math.trunc(def_ / 2))) - Math.trunc(def_ / 7);
  }
  if (d < 0) {
    d = 0;
  }
  const r = Math.trunc(d * (elemResist / 100)) + Math.trunc(d * ((-typeResist + petrify) / 100));
  const s = Math.trunc(r * (atackPower / 100));
  const f = Math.trunc(s * rand);
  const g = Math.trunc(f * ((-100 + critical + guard) / 100));
  return Math.trunc(g * (cushionBottle / 100));
}

function calcMagicYDamage(magicCritical, rand, mag, atackPower, elemPower, skillPower, res, elemResist, petrify, ailmentElem, balanceBreak) {
  const res_ = Math.trunc(res * (balanceBreak / 100));
  let d;
  if (mag + res_ == 0) {
    d = mag - mag * res_ - Math.trunc(res_ / 12);
  } else {
    d = mag - Math.trunc(mag * res_ / (mag + res_)) - Math.trunc(res_ / 12);
  }
  if (d < 0) {
    d = 0;
  }
  const c = Math.trunc(d * (magicCritical / 100));
  const s = Math.trunc(c * ((skillPower + atackPower) / 100));
  const e = Math.trunc(s * ((100 + elemPower) / 100));
  const r = Math.trunc(e * (elemResist / 100)) + Math.trunc(e * ((petrify + ailmentElem) / 100));
  return Math.trunc(r * rand);
}

function calcMagicHDamage(guard, rand, res, elemResist, elemDamage, petrify, ailmentElem, balanceBreak, cushionBottle, mag, atackPower) {
  const res_ = Math.trunc(res * (balanceBreak / 100));
  let d;
  if (mag + res_ == 0) {
    d = mag - mag * res_ - Math.trunc(res_ / 12);
  } else {
    d = mag - Math.trunc(mag * res_ / (mag + res_)) - Math.trunc(res_ / 12);
  }
  if (d < 0) {
    d = 0;
  }
  const s = Math.trunc(d * (atackPower / 100));
  const r = Math.trunc(s * (elemResist / 100)) + Math.trunc(s * ((petrify + ailmentElem) / 100));
  const f = Math.trunc(r * rand);
  const g = Math.trunc(f * (guard / 100));
  const p = Math.trunc(g * ((100 + elemDamage) / 100));
  return Math.trunc(p * (cushionBottle / 100));
}

function resultPhysY() {
  const atk = parseFloat(document.getElementById('friendPhysYAtk').value);
  const cri = parseFloat(document.getElementById('friendPhysYCri').value);
  const atackAtk = parseFloat(document.getElementById('friendPhysYAtackAtk').value);
  const atackPower = parseFloat(document.getElementById('friendPhysYAtackPower').value);
  const elemDamage = Number(document.getElementById('friendPhysYElemDamage').value);
  const typeDamage = Number(document.getElementById('friendPhysYTypeDamage').value);
  const def = parseFloat(document.getElementById('enemyPhysYDef').value);
  const blo = parseFloat(document.getElementById('enemyPhysYBlo').value);
  const neResist = parseFloat(document.getElementById('enemyPhysYNeResist').value);
  let petrify = 0;
  if (document.getElementById('enemyPhysYPetrify').checked == true) {
    petrify = 60;
  }
  let balanceBreak = 100;
  if (document.getElementById('enemyYBalanceBreak').checked == true) {
    balanceBreak = 50;
  }
  if (Number.isNaN(atk) == true || Number.isNaN(atackAtk) == true || Number.isNaN(atackPower) == true ||
      Number.isNaN(def) == true || Number.isNaN(neResist) == true) {
    document.getElementById('resultPhysYNormalDamage').innerText = '-';
    document.getElementById('resultPhysYCriticalDamage').innerText = '-';
    document.getElementById('resultPhysYBlockDamage').innerText = '-';
  } else {
    document.getElementById('resultPhysYNormalDamage').innerText =
        String(calcPhysYDamage(100, 0.85, atk, atackAtk, atackPower, elemDamage, typeDamage, def, neResist, petrify, balanceBreak)) +
        ' ~ ' + String(calcPhysYDamage(100, 1.15, atk, atackAtk, atackPower, elemDamage, typeDamage, def, neResist, petrify, balanceBreak));
    document.getElementById('resultPhysYCriticalDamage').innerText =
        String(calcPhysYDamage(125, 0.85, atk, atackAtk, atackPower, elemDamage, typeDamage, def, neResist, petrify, balanceBreak)) +
        ' ~ ' + String(calcPhysYDamage(125, 1.15, atk, atackAtk, atackPower, elemDamage, typeDamage, def, neResist, petrify, balanceBreak));
    document.getElementById('resultPhysYBlockDamage').innerText =
        String(calcPhysYDamage(75, 0.85, atk, atackAtk, atackPower, elemDamage, typeDamage, def, neResist, petrify, balanceBreak)) +
        ' ~ ' + String(calcPhysYDamage(75, 1.15, atk, atackAtk, atackPower, elemDamage, typeDamage, def, neResist, petrify, balanceBreak));
  }
  if (Number.isNaN(cri) == true || Number.isNaN(blo) == true) {
    document.getElementById('resultPhysYCriticalRate').innerText = '-';
    document.getElementById('resultPhysYBlockRate').innerText = '-';
  } else if (cri - blo > 0) {
    if (cri - blo < 100) {
      document.getElementById('resultPhysYNormalRate').innerText = (100 - (cri - blo)).toFixed(3) + '%';
      document.getElementById('resultPhysYCriticalRate').innerText = (cri - blo).toFixed(3) + '%';
    } else {
      document.getElementById('resultPhysYNormalDamage').innerText = '-';
      document.getElementById('resultPhysYNormalRate').innerText = '0.000%';
      document.getElementById('resultPhysYCriticalRate').innerText = '100.000%';
    }
    document.getElementById('resultPhysYBlockDamage').innerText = '-';
    document.getElementById('resultPhysYBlockRate').innerText = '0.000%';
  } else if (cri - blo == 0) {
    document.getElementById('resultPhysYNormalRate').innerText = '100.000%';
    document.getElementById('resultPhysYCriticalDamage').innerText = '-';
    document.getElementById('resultPhysYCriticalRate').innerText = '0.000%';
    document.getElementById('resultPhysYBlockDamage').innerText = '-';
    document.getElementById('resultPhysYBlockRate').innerText = '0.000%';
  } else if (cri - blo < 0) {
    if (cri - blo > -100) {
      document.getElementById('resultPhysYNormalRate').innerText = (100 - (blo - cri)).toFixed(3) + '%';
      document.getElementById('resultPhysYBlockRate').innerText = (blo - cri).toFixed(3) + '%';
    } else {
      document.getElementById('resultPhysYNormalDamage').innerText = '-';
      document.getElementById('resultPhysYNormalRate').innerText = '0.000%';
      document.getElementById('resultPhysYBlockRate').innerText = '100.000%';
    }
    document.getElementById('resultPhysYCriticalDamage').innerText = '-';
    document.getElementById('resultPhysYCriticalRate').innerText = '0.000%';
  }
}

function resultPhysH() {
  const def = parseFloat(document.getElementById('friendPhysHDef').value);
  const blo = parseFloat(document.getElementById('friendPhysHBlo').value);
  const elemResist = parseFloat(document.getElementById('friendPhysHElemResist').value);
  const typeResist = Number(document.getElementById('friendPhysHTypeResist').value);
  let petrify = 0;
  if (document.getElementById('friendPhysHPetrify').checked == true) {
    petrify = 60;
  }
  let balanceBreak = 100;
  if (document.getElementById('friendHBalanceBreak').checked == true) {
    balanceBreak = 50;
  }
  let cushionBottle = 100;
  if (document.getElementById('friendHCushionBottle').checked == true) {
    cushionBottle = 90;
  }
  const atk = parseFloat(document.getElementById('enemyPhysHAtk').value);
  const cri = parseFloat(document.getElementById('enemyPhysHCri').value);
  const atackAtk = parseFloat(document.getElementById('enemyPhysHAtackAtk').value);
  const atackPower = parseFloat(document.getElementById('enemyPhysHAtackPower').value);
  if (Number.isNaN(def) == true || Number.isNaN(elemResist) == true || Number.isNaN(atk) == true ||
      Number.isNaN(atackAtk) == true || Number.isNaN(atackPower) == true) {
    document.getElementById('resultPhysHNormalDamage').innerText = '-';
    document.getElementById('resultPhysHNormalGuardDamage').innerText = '-';
    document.getElementById('resultPhysHCriticalDamage').innerText = '-';
    document.getElementById('resultPhysHCriticalGuardDamage').innerText = '-';
    document.getElementById('resultPhysHBlockDamage').innerText = '-';
    document.getElementById('resultPhysHBlockGuardDamage').innerText = '-';
  } else {
    document.getElementById('resultPhysHNormalDamage').innerText =
        String(calcPhysHDamage(100, 100, 0.85, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower)) +
        ' ~ ' + String(calcPhysHDamage(100, 100, 1.15, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower));
    document.getElementById('resultPhysHNormalGuardDamage').innerText =
        String(calcPhysHDamage(100, 25, 0.85, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower)) +
        ' ~ ' + String(calcPhysHDamage(100, 25, 1.15, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower));
    document.getElementById('resultPhysHCriticalDamage').innerText =
        String(calcPhysHDamage(125, 100, 0.85, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower)) +
        ' ~ ' + String(calcPhysHDamage(125, 100, 1.15, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower));
    document.getElementById('resultPhysHCriticalGuardDamage').innerText =
        String(calcPhysHDamage(125, 25, 0.85, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower)) +
        ' ~ ' + String(calcPhysHDamage(125, 25, 1.15, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower));
    document.getElementById('resultPhysHBlockDamage').innerText =
        String(calcPhysHDamage(75, 100, 0.85, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower)) +
        ' ~ ' + String(calcPhysHDamage(75, 100, 1.15, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower));
    document.getElementById('resultPhysHBlockGuardDamage').innerText =
        String(calcPhysHDamage(75, 25, 0.85, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower)) +
        ' ~ ' + String(calcPhysHDamage(75, 25, 1.15, def, elemResist, typeResist, petrify, balanceBreak, cushionBottle, atk, atackAtk, atackPower));
  }
  if (Number.isNaN(blo) == true || Number.isNaN(cri) == true) {
    document.getElementById('resultPhysHCriticalRate').innerText = '-';
    document.getElementById('resultPhysHBlockRate').innerText = '-';
  } else if (cri - blo > 0) {
    if (cri - blo < 100) {
      document.getElementById('resultPhysHNormalRate').innerText = (100 - (cri - blo)).toFixed(3) + '%';
      document.getElementById('resultPhysHCriticalRate').innerText = (cri - blo).toFixed(3) + '%';
    } else {
      document.getElementById('resultPhysHNormalDamage').innerText = '-';
      document.getElementById('resultPhysHNormalRate').innerText = '0.000%';
      document.getElementById('resultPhysHNormalGuardDamage').innerText = '-';
      document.getElementById('resultPhysHCriticalRate').innerText = '100.000%';
    }
    document.getElementById('resultPhysHBlockDamage').innerText = '-';
    document.getElementById('resultPhysHBlockGuardDamage').innerText = '-';
    document.getElementById('resultPhysHBlockRate').innerText = '0.000%';
  } else if (cri - blo == 0) {
    document.getElementById('resultPhysHNormalRate').innerText = '100.000%';
    document.getElementById('resultPhysHCriticalDamage').innerText = '-';
    document.getElementById('resultPhysHCriticalGuardDamage').innerText = '-';
    document.getElementById('resultPhysHCriticalRate').innerText = '0.000%';
    document.getElementById('resultPhysHBlockDamage').innerText = '-';
    document.getElementById('resultPhysHBlockGuardDamage').innerText = '-';
    document.getElementById('resultPhysHBlockRate').innerText = '0.000%';
  } else if (cri - blo < 0) {
    if (cri - blo > -100) {
      document.getElementById('resultPhysHNormalRate').innerText = (100 - (blo - cri)).toFixed(3) + '%';
      document.getElementById('resultPhysHBlockRate').innerText = (blo - cri).toFixed(3) + '%';
    } else {
      document.getElementById('resultPhysHNormalDamage').innerText = '-';
      document.getElementById('resultPhysHNormalRate').innerText = '0.000%';
      document.getElementById('resultPhysHNormalGuardDamage').innerText = '-';
      document.getElementById('resultPhysHBlockRate').innerText = '100.000%';
    }
    document.getElementById('resultPhysHCriticalDamage').innerText = '-';
    document.getElementById('resultPhysHCriticalGuardDamage').innerText = '-';
    document.getElementById('resultPhysHCriticalRate').innerText = '0.000%';
  }
}

function resultMagicY() {
  const mag = parseFloat(document.getElementById('friendMagicYMag').value);
  const atackPower = parseFloat(document.getElementById('friendMagicYAtackPower').value);
  const elemPower = Number(document.getElementById('friendMagicYElemPower').value);
  const skillPower = Number(document.getElementById('friendMagicYSkillPower').value);
  const magicCritical = Number(document.getElementById('friendMagicYMagicCritical').value);
  const res = parseFloat(document.getElementById('enemyMagicYRes').value);
  const elemResist = parseFloat(document.getElementById('enemyMagicYElemResist').value);
  let petrify = 0;
  if (document.getElementById('enemyMagicYStatusAilment').selectedIndex == 6) {
    petrify = 60;
    // スマッシュガストの番号が変更された場合に値の修正が必要
    if (document.getElementById('friendMagicYAtack').selectedIndex == 26) {
      petrify = 100;
    }
  }
  let ailmentElem = 0;
  if (document.getElementById('enemyMagicYAilmentElem').checked == true) {
    ailmentElem = 20;
  }
  let balanceBreak = 100;
  if (document.getElementById('enemyYBalanceBreak').checked == true) {
    balanceBreak = 50;
  }
  if (Number.isNaN(mag) == true || Number.isNaN(atackPower) == true || Number.isNaN(res) == true || Number.isNaN(elemResist) == true) {
    document.getElementById('resultMagicYNormalDamage').innerText = '-';
    document.getElementById('resultMagicYMagicCriticalDamage').innerText = '-';
  } else {
    document.getElementById('resultMagicYNormalDamage').innerText =
        String(calcMagicYDamage(100, 0.85, mag, atackPower, elemPower, skillPower, res, elemResist, petrify, ailmentElem, balanceBreak)) +
        ' ~ ' + String(calcMagicYDamage(100, 1.15, mag, atackPower, elemPower, skillPower, res, elemResist, petrify, ailmentElem, balanceBreak));
    document.getElementById('resultMagicYMagicCriticalDamage').innerText =
        String(calcMagicYDamage(125, 0.85, mag, atackPower, elemPower, skillPower, res, elemResist, petrify, ailmentElem, balanceBreak)) +
        ' ~ ' + String(calcMagicYDamage(125, 1.15, mag, atackPower, elemPower, skillPower, res, elemResist, petrify, ailmentElem, balanceBreak));
  }
  if (magicCritical <= 0) {
    document.getElementById('resultMagicYNormalRate').innerText = '100.000%';
    document.getElementById('resultMagicYMagicCriticalRate').innerText = '0.000%';
    document.getElementById('resultMagicYMagicCriticalDamage').innerText = '-';
  } else if (magicCritical < 100) {
    document.getElementById('resultMagicYNormalRate').innerText = (100 - magicCritical).toFixed(3) + '%';
    document.getElementById('resultMagicYMagicCriticalRate').innerText = magicCritical.toFixed(3) + '%';
  } else if (magicCritical >= 100) {
    document.getElementById('resultMagicYNormalDamage').innerText = '-';
    document.getElementById('resultMagicYNormalRate').innerText = '0.000%';
    document.getElementById('resultMagicYMagicCriticalRate').innerText = '100.000%';
  }
}

function resultMagicH() {
  const res = parseFloat(document.getElementById('friendMagicHRes').value);
  const elemResist = parseFloat(document.getElementById('friendMagicHElemResist').value);
  const elemDamage = Number(document.getElementById('friendMagicHElemDamage').value);
  let petrify = 0;
  if (document.getElementById('friendMagicHStatusAilment').selectedIndex == 6) {
    petrify = 60;
    // スマッシュガストの番号が変更された場合に値の修正が必要
    if (document.getElementById('enemyMagicHAtack').selectedIndex == 1) {
      petrify = 100;
    }
  }
  let ailmentElem = 0;
  if (document.getElementById('friendMagicHAilmentElem').checked == true) {
    ailmentElem = 20;
  }
  let balanceBreak = 100;
  if (document.getElementById('friendHBalanceBreak').checked == true) {
    balanceBreak = 50;
  }
  let cushionBottle = 100;
  if (document.getElementById('friendHCushionBottle').checked == true) {
    cushionBottle = 90;
  }
  const mag = parseFloat(document.getElementById('enemyMagicHMag').value);
  const atackPower = parseFloat(document.getElementById('enemyMagicHAtackPower').value);
  if (Number.isNaN(res) == true || Number.isNaN(elemResist) == true || Number.isNaN(mag) == true || Number.isNaN(atackPower) == true) {
    document.getElementById('resultMagicHNormalDamage').innerText = '-';
    document.getElementById('resultMagicHNormalGuardDamage').innerText = '-';
  } else {
    document.getElementById('resultMagicHNormalDamage').innerText =
        String(calcMagicHDamage(100, 0.85, res, elemResist, elemDamage, petrify, ailmentElem, balanceBreak, cushionBottle, mag, atackPower)) +
        ' ~ ' + String(calcMagicHDamage(100, 1.15, res, elemResist, elemDamage, petrify, ailmentElem, balanceBreak, cushionBottle, mag, atackPower));
    document.getElementById('resultMagicHNormalGuardDamage').innerText =
        String(calcMagicHDamage(50, 0.85, res, elemResist, elemDamage, petrify, ailmentElem, balanceBreak, cushionBottle, mag, atackPower)) +
        ' ~ ' + String(calcMagicHDamage(50, 1.15, res, elemResist, elemDamage, petrify, ailmentElem, balanceBreak, cushionBottle, mag, atackPower));
  }
}

function result() {
  resultPhysY();
  resultPhysH();
  resultMagicY();
  resultMagicH();
}
