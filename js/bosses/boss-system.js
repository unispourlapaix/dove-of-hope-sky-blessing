/**
 * 🎮 DOVE OF HOPE: SKY BLESSING
 * =============================
 * Module: Système de Boss
 *
 * Ce module gère les boss de fin de niveau.
 * Chaque boss a des patterns d'attaque uniques et des mécaniques spéciales.
 */

/**
 * Boss 1: L'Araignée des Ténèbres
 * Design géométrique simple avec des pattes articulées
 */
class SpiderBoss {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.x = x;
    this.y = y;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Statistiques
    this.maxHealth = 1000;
    this.health = this.maxHealth;
    this.isDead = false;

    // Dimensions - Version HORREUR (corps plus fin)
    this.bodyRadius = 18;
    this.headRadius = 12;

    // Pattes (8 pattes longues et crépues avec 5 segments - style horreur)
    this.legs = [];
    this.initLegs();

    // Attaque: lignes de toile
    this.webLines = [];
    this.lastWebAttack = 0;
    this.webAttackCooldown = 2000; // 2 secondes entre les attaques

    // Mouvement
    this.velocityX = 1;
    this.velocityY = 0.5;
    this.movePattern = 0; // Pattern de mouvement
    this.moveTimer = 0;

    // Animation
    this.legAnimationOffset = 0;

    // Points faibles (yeux rouges lumineux - version horreur)
    this.weakPoints = [
      { x: -5, y: -3, radius: 4, hit: false },
      { x: 5, y: -3, radius: 4, hit: false }
    ];
  }

  initLegs() {
    // 8 pattes longues et fines - Style HORREUR
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 / 8) * i;
      this.legs.push({
        baseAngle: angle,
        segments: [
          { length: 35, angle: 0 },
          { length: 30, angle: 0 },
          { length: 25, angle: 0 },
          { length: 20, angle: 0 },
          { length: 15, angle: 0 }
        ]
      });
    }
  }

  update(dt, playerX, playerY) {
    if(this.isDead) return;

    const dtFactor = dt / 16.67;

    // Mouvement du boss
    this.moveTimer += dt;

    // Pattern de mouvement: oscillation horizontale en haut de l'écran
    this.x += this.velocityX * dtFactor;
    this.y += Math.sin(this.moveTimer / 500) * 0.5 * dtFactor;

    // Rebond sur les bords avec contrainte de position
    if(this.x - this.bodyRadius < 0) {
      this.x = this.bodyRadius;
      this.velocityX *= -1;
      // Son de déplacement rapide
      if (typeof playSound === 'function') {
        playSound('spider_skitter');
      }
    }
    if(this.x + this.bodyRadius > this.canvasWidth) {
      this.x = this.canvasWidth - this.bodyRadius;
      this.velocityX *= -1;
      // Son de déplacement rapide
      if (typeof playSound === 'function') {
        playSound('spider_skitter');
      }
    }

    // Garder en haut de l'écran
    if(this.y < 50) this.y = 50;
    if(this.y > 150) this.y = 150;

    // Animation des pattes - RAPIDE et SACCADÉE (horreur)
    this.legAnimationOffset += 0.12 * dtFactor;
    this.updateLegs(dtFactor);

    // Attaquer avec des lignes de toile
    if(Date.now() - this.lastWebAttack > this.webAttackCooldown) {
      this.shootWebLine();
      this.lastWebAttack = Date.now();
    }

    // Mettre à jour les lignes de toile
    this.updateWebLines(dtFactor);
  }

  updateLegs(dtFactor) {
    // Animation CRÉPY et SACCADÉE - Style horreur
    this.legs.forEach((leg, i) => {
      const offset = Math.sin(this.legAnimationOffset + i * 0.8) * 0.4;
      const creepyOffset = Math.sin(this.legAnimationOffset * 2 + i) * 0.2;

      leg.segments[0].angle = offset + creepyOffset;
      leg.segments[1].angle = offset * 1.8 - creepyOffset;
      leg.segments[2].angle = offset * 2.5 + creepyOffset * 2;
      leg.segments[3].angle = offset * 3.2 - creepyOffset;
      leg.segments[4].angle = offset * 4 + creepyOffset * 3;
    });
  }

  shootWebLine() {
    // Son de lancer de toile
    if (typeof playSound === 'function') {
      playSound('spider_web');
    }
    
    // Créer une ligne de toile qui descend vers le sol
    const webX = this.x + (Math.random() - 0.5) * 60;
    this.webLines.push({
      x: webX,
      y: this.y + this.bodyRadius,
      speed: 3,
      width: 2,
      active: true
    });
  }

  updateWebLines(dtFactor) {
    for(let i = this.webLines.length - 1; i >= 0; i--) {
      const web = this.webLines[i];
      web.y += web.speed * dtFactor;

      // Supprimer si hors écran
      if(web.y > this.canvasHeight) {
        this.webLines.splice(i, 1);
      }
    }
  }

  takeDamage(damage, hitX, hitY) {
    if(this.isDead) return false;

    // Vérifier si c'est un point faible (œil) qui est touché
    let criticalHit = false;
    for(let wp of this.weakPoints) {
      const wpX = this.x + wp.x;
      const wpY = this.y - this.headRadius + wp.y;
      const dist = Math.sqrt((hitX - wpX) ** 2 + (hitY - wpY) ** 2);

      if(dist < wp.radius && !wp.hit) {
        damage *= 2; // Double dégâts sur les points faibles
        criticalHit = true;
        wp.hit = true;
        break;
      }
    }

    this.health -= damage;
    
    // Sifflement agressif si dommages importants ou coup critique
    if ((damage > 40 || criticalHit) && typeof playSound === 'function') {
      playSound('spider_hiss');
    }

    if(this.health <= 0) {
      this.health = 0;
      this.isDead = true;
    }

    return criticalHit;
  }

  getHealthPercentage() {
    return (this.health / this.maxHealth) * 100;
  }

  draw(ctx) {
    if(this.isDead) return;

    ctx.save();

    // Dessiner les pattes
    this.drawLegs(ctx);

    // Dessiner le corps (noir profond avec bordure violet sombre - style horreur)
    ctx.fillStyle = '#0a0a0a';
    ctx.strokeStyle = '#4a004a';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#4a004a';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.bodyRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Dessiner la tête (noir profond, plus petite)
    ctx.fillStyle = '#0a0a0a';
    ctx.strokeStyle = '#4a004a';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#4a004a';
    ctx.beginPath();
    ctx.arc(this.x, this.y - this.headRadius, this.headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Dessiner les yeux (points faibles)
    this.weakPoints.forEach(wp => {
      const wpX = this.x + wp.x;
      const wpY = this.y - this.headRadius + wp.y;

      if(!wp.hit) {
        // Œil ROUGE SANG LUMINEUX - Effet horreur intense
        ctx.fillStyle = '#ff0000';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ff0000';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius, 0, Math.PI * 2);
        ctx.fill();

        // Pupille noire au centre
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Œil touché (noir mort)
        ctx.fillStyle = '#0a0a0a';
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    });

    // MANDIBULES ET CROCS - Style TARENTULE HORRIFIQUE
    const headY = this.y - this.headRadius;

    // Mandibules gauche et droite (chélocères)
    ctx.strokeStyle = '#1a0a0a';
    ctx.fillStyle = '#0a0a0a';
    ctx.lineWidth = 3;

    // Mandibule gauche
    ctx.beginPath();
    ctx.moveTo(this.x - 8, headY + 8);
    ctx.lineTo(this.x - 12, headY + 18);
    ctx.lineTo(this.x - 10, headY + 20);
    ctx.lineTo(this.x - 6, headY + 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Mandibule droite
    ctx.beginPath();
    ctx.moveTo(this.x + 8, headY + 8);
    ctx.lineTo(this.x + 12, headY + 18);
    ctx.lineTo(this.x + 10, headY + 20);
    ctx.lineTo(this.x + 6, headY + 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // CROCS VENIMEUX (rouge sang avec effet de venin)
    ctx.strokeStyle = '#8a0000';
    ctx.fillStyle = '#ff0000';
    ctx.lineWidth = 2;

    // Croc gauche (acéré et pointu)
    ctx.beginPath();
    ctx.moveTo(this.x - 10, headY + 18);
    ctx.lineTo(this.x - 11, headY + 28);
    ctx.lineTo(this.x - 9, headY + 28);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Croc droit (acéré et pointu)
    ctx.beginPath();
    ctx.moveTo(this.x + 10, headY + 18);
    ctx.lineTo(this.x + 11, headY + 28);
    ctx.lineTo(this.x + 9, headY + 28);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // CICATRICES et FISSURES sur la tête (style BRUTAL)
    ctx.strokeStyle = '#8a0000';
    ctx.lineWidth = 1.5;

    // Cicatrice 1 (oblique gauche)
    ctx.beginPath();
    ctx.moveTo(this.x - 9, headY + 5);
    ctx.lineTo(this.x - 7, headY + 10);
    ctx.stroke();

    // Cicatrice 2 (oblique droite)
    ctx.beginPath();
    ctx.moveTo(this.x + 9, headY + 5);
    ctx.lineTo(this.x + 7, headY + 10);
    ctx.stroke();

    // Fissure centrale verticale
    ctx.beginPath();
    ctx.moveTo(this.x, headY + 8);
    ctx.lineTo(this.x, headY + 12);
    ctx.stroke();

    // Dessiner les lignes de toile
    this.drawWebLines(ctx);

    ctx.restore();
  }

  drawLegs(ctx) {
    this.legs.forEach(leg => {
      let currentX = this.x;
      let currentY = this.y;
      let currentAngle = leg.baseAngle;

      // Pattes FINES et SOMBRES - Style horreur
      ctx.strokeStyle = '#1a0a1a';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      let lastX, lastY, lastAngle;

      // Dessiner chaque segment de la patte
      leg.segments.forEach((segment, index) => {
        // Ombre pour effet 3D horrifique
        ctx.shadowBlur = 3;
        ctx.shadowColor = '#000';

        ctx.beginPath();
        ctx.moveTo(currentX, currentY);

        currentAngle += segment.angle;
        const endX = currentX + Math.cos(currentAngle) * segment.length;
        const endY = currentY + Math.sin(currentAngle) * segment.length;

        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Petites épines/poils sur les pattes (effet crépy)
        if(index % 2 === 0) {
          for(let i = 0; i < 3; i++) {
            const hairX = currentX + (endX - currentX) * (i / 3);
            const hairY = currentY + (endY - currentY) * (i / 3);
            const hairAngle = currentAngle + Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(hairX, hairY);
            ctx.lineTo(hairX + Math.cos(hairAngle) * 4, hairY + Math.sin(hairAngle) * 4);
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.lineWidth = 2;
          }
        }

        ctx.shadowBlur = 0;

        // Articulation (petit cercle noir)
        ctx.fillStyle = '#0a0a0a';
        ctx.strokeStyle = '#4a004a';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(endX, endY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#1a0a1a';

        currentX = endX;
        currentY = endY;
        lastX = endX;
        lastY = endY;
        lastAngle = currentAngle;
      });

      // GRIFFES ACÉRÉES au bout de chaque patte (style tarentule)
      ctx.fillStyle = '#666666';
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 1.5;

      // 2 griffes pointues et recourbées (grises)
      for(let i = -0.5; i <= 0.5; i += 1) {
        const clawAngle = lastAngle + (i * Math.PI / 6);
        const clawLength = 6;
        const clawX = lastX + Math.cos(clawAngle) * clawLength;
        const clawY = lastY + Math.sin(clawAngle) * clawLength;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(clawX, clawY);
        ctx.lineTo(clawX - Math.cos(clawAngle) * 2, clawY - Math.sin(clawAngle) * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    });
  }

  drawWebLines(ctx) {
    ctx.strokeStyle = '#ffffff';
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#ffffff';

    this.webLines.forEach(web => {
      ctx.lineWidth = web.width;
      ctx.beginPath();
      ctx.moveTo(web.x, this.y + this.bodyRadius);
      ctx.lineTo(web.x, web.y);
      ctx.stroke();
    });

    ctx.shadowBlur = 0;
  }

  checkWebCollision(playerX, playerY, playerW, playerH) {
    // Vérifier si le joueur touche une ligne de toile
    for(let web of this.webLines) {
      if(playerX < web.x + web.width &&
         playerX + playerW > web.x - web.width &&
         playerY < web.y &&
         playerY + playerH > this.y + this.bodyRadius) {
        return true;
      }
    }
    return false;
  }
}

/**
 * Boss 2: Le Serpent Volant des Ténèbres
 * Serpent noir ondulant qui envoie des petites couleuvres
 */
class FlyingSnakeBoss {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Statistiques
    this.maxHealth = 800;
    this.health = this.maxHealth;
    this.isDead = false;

    // Corps du serpent (segments)
    this.segments = [];
    this.segmentCount = 15;
    this.segmentRadius = 12;
    this.headRadius = 18;
    this.initSegments(x, y);

    // Mouvement ondulant
    this.waveOffset = 0;
    this.waveSpeed = 0.08;
    this.waveAmplitude = 40;
    this.direction = 1; // 1 = droite, -1 = gauche
    this.baseY = y;
    this.velocityX = 0.8;

    // Attaque: petites couleuvres
    this.snaklets = []; // Petites couleuvres
    this.lastSnakletAttack = 0;
    this.snakletAttackCooldown = 2500; // 2.5 secondes entre les attaques

    // Points faibles (yeux rouges)
    this.weakPoints = [
      { x: -6, y: -4, radius: 4, hit: false },
      { x: 6, y: -4, radius: 4, hit: false }
    ];
  }

  initSegments(x, y) {
    for(let i = 0; i < this.segmentCount; i++) {
      this.segments.push({
        x: x - i * (this.segmentRadius * 1.5),
        y: y,
        targetX: 0,
        targetY: 0
      });
    }
  }

  update(dt, playerX, playerY) {
    if(this.isDead) return;

    const dtFactor = dt / 16.67;

    // Mouvement ondulant
    this.waveOffset += this.waveSpeed * dtFactor;
    
    // Son flip...flip au déplacement (tous les 0.5 secondes environ)
    if (!this.lastFlipSound) this.lastFlipSound = 0;
    if (Date.now() - this.lastFlipSound > 500) {
      if (typeof playSound === 'function') {
        playSound('snake_flip');
      }
      this.lastFlipSound = Date.now();
    }

    // Déplacement horizontal
    this.segments[0].x += this.velocityX * this.direction * dtFactor;

    // Changer de direction aux bords avec contrainte de position
    if(this.segments[0].x < 50) {
      this.segments[0].x = 50;
      this.direction *= -1;
      // Sifflement horrible (shee sheeeh!)
      if (typeof playSound === 'function') {
        playSound('snake_hiss');
      }
    }
    if(this.segments[0].x > this.canvasWidth - 50) {
      this.segments[0].x = this.canvasWidth - 50;
      this.direction *= -1;
      // Sifflement horrible (shee sheeeh!)
      if (typeof playSound === 'function') {
        playSound('snake_hiss');
      }
    }

    // Mouvement vertical sinusoïdal pour la tête
    this.segments[0].y = this.baseY + Math.sin(this.waveOffset) * this.waveAmplitude;

    // Les segments suivent la tête avec un délai (effet serpent)
    for(let i = 1; i < this.segments.length; i++) {
      const targetSegment = this.segments[i - 1];
      const currentSegment = this.segments[i];

      const dx = targetSegment.x - currentSegment.x;
      const dy = targetSegment.y - currentSegment.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const targetDistance = this.segmentRadius * 1.5;

      if(distance > targetDistance) {
        const ratio = (distance - targetDistance) / distance;
        currentSegment.x += dx * ratio * 0.3;
        currentSegment.y += dy * ratio * 0.3;
      }
    }

    // Attaquer avec des petites couleuvres
    if(Date.now() - this.lastSnakletAttack > this.snakletAttackCooldown) {
      this.shootSnaklet();
      this.lastSnakletAttack = Date.now();
    }

    // Mettre à jour les couleuvres
    this.updateSnaklets(dtFactor);
  }

  shootSnaklet() {
    // Son de crachat
    if (typeof playSound === 'function') {
      playSound('snake_spit');
    }
    
    // Créer 2-3 petites couleuvres à partir de positions aléatoires du corps
    const count = 2 + Math.floor(Math.random() * 2);
    for(let i = 0; i < count; i++) {
      const segmentIndex = Math.floor(Math.random() * this.segments.length);
      const segment = this.segments[segmentIndex];

      this.snaklets.push({
        segments: [
          { x: segment.x, y: segment.y },
          { x: segment.x - 8, y: segment.y },
          { x: segment.x - 16, y: segment.y }
        ],
        velocityY: 1.5 + Math.random() * 0.5,
        velocityX: (Math.random() - 0.5) * 0.5,
        waveOffset: Math.random() * Math.PI * 2,
        active: true
      });
    }
  }

  updateSnaklets(dtFactor) {
    this.snaklets.forEach(snaklet => {
      if(!snaklet.active) return;

      // Déplacer la tête de la couleuvre
      snaklet.segments[0].y += snaklet.velocityY * dtFactor;
      snaklet.segments[0].x += Math.sin(snaklet.waveOffset) * 0.5 + snaklet.velocityX * dtFactor;
      snaklet.waveOffset += 0.15 * dtFactor;

      // Les segments suivent
      for(let i = 1; i < snaklet.segments.length; i++) {
        const target = snaklet.segments[i - 1];
        const current = snaklet.segments[i];

        current.x += (target.x - current.x) * 0.3;
        current.y += (target.y - current.y) * 0.3;
      }

      // Désactiver si hors écran
      if(snaklet.segments[0].y > this.canvasHeight + 50) {
        snaklet.active = false;
      }
    });

    // Nettoyer les couleuvres inactives
    this.snaklets = this.snaklets.filter(s => s.active);
  }

  takeDamage(damage, hitX, hitY) {
    if(this.isDead) return false;

    let isCritical = false;

    // Vérifier si c'est un coup critique (touche les yeux)
    this.weakPoints.forEach(wp => {
      if(!wp.hit) {
        const wpX = this.segments[0].x + wp.x;
        const wpY = this.segments[0].y + wp.y;
        const dist = Math.sqrt((hitX - wpX) ** 2 + (hitY - wpY) ** 2);

        if(dist < wp.radius + 5) {
          damage *= 2;
          wp.hit = true;
          isCritical = true;
        }
      }
    });

    this.health -= damage;

    if(this.health <= 0) {
      this.health = 0;
      this.isDead = true;
    }

    return isCritical;
  }

  getHealthPercentage() {
    return (this.health / this.maxHealth) * 100;
  }

  checkSnakletCollision(playerX, playerY, playerW, playerH) {
    for(let snaklet of this.snaklets) {
      if(!snaklet.active) continue;

      for(let segment of snaklet.segments) {
        if(playerX < segment.x + 5 &&
           playerX + playerW > segment.x - 5 &&
           playerY < segment.y + 5 &&
           playerY + playerH > segment.y - 5) {
          snaklet.active = false;
          return true;
        }
      }
    }
    return false;
  }

  draw(ctx) {
    if(this.isDead) return;

    ctx.save();

    // Dessiner les petites couleuvres
    this.drawSnaklets(ctx);

    // Dessiner le corps du serpent (segments)
    for(let i = this.segments.length - 1; i > 0; i--) {
      const segment = this.segments[i];

      // Dégradé noir vers gris foncé
      const gradient = ctx.createRadialGradient(segment.x, segment.y, 0, segment.x, segment.y, this.segmentRadius);
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(1, '#0a0a0a');

      ctx.fillStyle = gradient;
      ctx.strokeStyle = '#2a2a2a';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#000';

      ctx.beginPath();
      ctx.arc(segment.x, segment.y, this.segmentRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Écailles (petites lignes)
      if(i % 2 === 0) {
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 1;
        for(let j = 0; j < 4; j++) {
          const angle = (Math.PI * 2 / 4) * j;
          const x1 = segment.x + Math.cos(angle) * this.segmentRadius * 0.5;
          const y1 = segment.y + Math.sin(angle) * this.segmentRadius * 0.5;
          const x2 = segment.x + Math.cos(angle) * this.segmentRadius * 0.8;
          const y2 = segment.y + Math.sin(angle) * this.segmentRadius * 0.8;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
    }

    // Dessiner la tête (plus grosse)
    const head = this.segments[0];
    const headGradient = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, this.headRadius);
    headGradient.addColorStop(0, '#2a2a2a');
    headGradient.addColorStop(1, '#0a0a0a');

    ctx.fillStyle = headGradient;
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#000';

    ctx.beginPath();
    ctx.arc(head.x, head.y, this.headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Yeux rouges (points faibles)
    this.weakPoints.forEach(wp => {
      const wpX = head.x + wp.x;
      const wpY = head.y + wp.y;

      if(!wp.hit) {
        // Œil rouge lumineux
        ctx.fillStyle = '#ff0000';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ff0000';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius, 0, Math.PI * 2);
        ctx.fill();

        // Pupille noire (verticale - style serpent)
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.ellipse(wpX, wpY, wp.radius * 0.3, wp.radius * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Œil touché (noir)
        ctx.fillStyle = '#0a0a0a';
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    });

    // Langue fourchue (rouge)
    const tongueLength = 15 + Math.sin(this.waveOffset * 3) * 5;
    ctx.strokeStyle = '#cc0000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    // Langue principale
    ctx.beginPath();
    ctx.moveTo(head.x, head.y + this.headRadius - 5);
    ctx.lineTo(head.x, head.y + this.headRadius + tongueLength);
    ctx.stroke();

    // Fourche gauche
    ctx.beginPath();
    ctx.moveTo(head.x, head.y + this.headRadius + tongueLength);
    ctx.lineTo(head.x - 4, head.y + this.headRadius + tongueLength + 5);
    ctx.stroke();

    // Fourche droite
    ctx.beginPath();
    ctx.moveTo(head.x, head.y + this.headRadius + tongueLength);
    ctx.lineTo(head.x + 4, head.y + this.headRadius + tongueLength + 5);
    ctx.stroke();

    ctx.restore();
  }

  drawSnaklets(ctx) {
    this.snaklets.forEach(snaklet => {
      if(!snaklet.active) return;

      // Dessiner chaque segment de la petite couleuvre
      snaklet.segments.forEach((segment, i) => {
        ctx.fillStyle = i === 0 ? '#2a2a2a' : '#1a1a1a';
        ctx.strokeStyle = '#0a0a0a';
        ctx.lineWidth = 1;

        const radius = i === 0 ? 5 : 4; // Tête un peu plus grosse

        ctx.beginPath();
        ctx.arc(segment.x, segment.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });

      // Petits yeux verts sur la tête
      const head = snaklet.segments[0];
      ctx.fillStyle = '#00ff00';
      ctx.beginPath();
      ctx.arc(head.x - 2, head.y - 1, 1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(head.x + 2, head.y - 1, 1, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}

/**
 * Boss 3: La Poule Folle
 * Poule avec gros corps et petit bec qui pond des œufs explosifs
 */
class CrazyChickenBoss {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.x = x;
    this.y = y;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Statistiques
    this.maxHealth = 600;
    this.health = this.maxHealth;
    this.isDead = false;

    // Dimensions
    this.bodyRadius = 25; // Gros corps
    this.headRadius = 10; // Petit bec
    this.wingSize = 18;

    // Mouvement
    this.velocityX = 1.2;
    this.direction = 1;
    this.bobOffset = 0; // Pour le mouvement de haut en bas
    this.baseY = y;

    // Attaque: œufs explosifs
    this.eggs = [];
    this.lastEggDrop = 0;
    this.eggDropCooldown = 1800; // 1.8 secondes entre les œufs

    // Animation
    this.wingFlapOffset = 0;

    // Points faibles (yeux bigleux - gros et décalés)
    this.weakPoints = [
      { x: -6, y: -2, radius: 6, hit: false }, // Œil gauche plus gros
      { x: 6, y: -2, radius: 6, hit: false }  // Œil droit plus gros
    ];
    
    // Offset pour yeux bigleux qui bougent
    this.eyeWiggleOffset = 0;
  }

  update(dt, playerX, playerY) {
    if(this.isDead) return;

    const dtFactor = dt / 16.67;

    // Mouvement horizontal
    this.x += this.velocityX * this.direction * dtFactor;

    // Changer de direction aux bords avec contrainte de position
    if(this.x - this.bodyRadius < 30) {
      this.x = 30 + this.bodyRadius;
      this.direction *= -1;
      // Son "plouplou" au changement de direction
      if (typeof playSound === 'function') {
        playSound('chicken_walk');
      }
    }
    if(this.x + this.bodyRadius > this.canvasWidth - 30) {
      this.x = this.canvasWidth - 30 - this.bodyRadius;
      this.direction *= -1;
      // Son "plouplou" au changement de direction
      if (typeof playSound === 'function') {
        playSound('chicken_walk');
      }
    }

    // Mouvement vertical (bobbing)
    this.bobOffset += 0.08 * dtFactor;
    this.y = this.baseY + Math.sin(this.bobOffset) * 15;

    // Animation des ailes
    this.wingFlapOffset += 0.2 * dtFactor;
    
    // Animation des yeux bigleux (mouvement aléatoire)
    this.eyeWiggleOffset += 0.15 * dtFactor;

    // Pondre des œufs
    if(Date.now() - this.lastEggDrop > this.eggDropCooldown) {
      this.dropEgg();
      this.lastEggDrop = Date.now();
      
      // Son de caquètement de la poule (cotcot kaket)
      if (typeof playSound === 'function') {
        playSound('chicken_cluck');
      }
    }

    // Mettre à jour les œufs
    this.updateEggs(dtFactor);
  }

  dropEgg() {
    // Son d'œuf qui tombe (shouuup!)
    if (typeof playSound === 'function') {
      playSound('egg_drop');
    }
    
    // Créer un œuf sous la poule
    this.eggs.push({
      x: this.x,
      y: this.y + this.bodyRadius + 5,
      velocityY: 0,
      rotation: 0,
      active: true,
      exploded: false
    });
  }

  updateEggs(dtFactor) {
    this.eggs.forEach(egg => {
      if(!egg.active) return;

      // Gravité
      egg.velocityY += 0.3 * dtFactor;
      egg.y += egg.velocityY * dtFactor;
      egg.rotation += 0.15 * dtFactor;

      // Exploser quand il touche le sol ou sort de l'écran
      if(egg.y > this.canvasHeight - 50) {
        egg.exploded = true;
        egg.active = false;
      }
    });

    // Nettoyer les œufs inactifs
    this.eggs = this.eggs.filter(e => e.active);
  }

  takeDamage(damage, hitX, hitY) {
    if(this.isDead) return false;

    let isCritical = false;

    // Vérifier si c'est un coup critique (touche les yeux)
    this.weakPoints.forEach(wp => {
      if(!wp.hit) {
        const wpX = this.x + wp.x;
        const wpY = this.y - this.headRadius + wp.y;
        const dist = Math.sqrt((hitX - wpX) ** 2 + (hitY - wpY) ** 2);

        if(dist < wp.radius + 5) {
          damage *= 2;
          wp.hit = true;
          isCritical = true;
        }
      }
    });

    this.health -= damage;

    if(this.health <= 0) {
      this.health = 0;
      this.isDead = true;
    }

    return isCritical;
  }

  getHealthPercentage() {
    return (this.health / this.maxHealth) * 100;
  }

  checkEggCollision(playerX, playerY, playerW, playerH) {
    for(let egg of this.eggs) {
      if(!egg.active) continue;

      // Collision avec l'œuf
      if(playerX < egg.x + 8 &&
         playerX + playerW > egg.x - 8 &&
         playerY < egg.y + 10 &&
         playerY + playerH > egg.y - 10) {
        egg.active = false;
        return true;
      }
    }
    return false;
  }

  draw(ctx) {
    if(this.isDead) return;

    ctx.save();

    // Dessiner les œufs
    this.drawEggs(ctx);

    // Corps (gros et rond - blanc/beige)
    const bodyGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.bodyRadius);
    bodyGradient.addColorStop(0, '#ffffff');
    bodyGradient.addColorStop(1, '#f5e6d3');

    ctx.fillStyle = bodyGradient;
    ctx.strokeStyle = '#d4a574';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.bodyRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Ailes (battement)
    const wingFlap = Math.sin(this.wingFlapOffset) * 0.3;

    // Aile gauche
    ctx.fillStyle = '#d4a574';
    ctx.beginPath();
    ctx.ellipse(
      this.x - this.bodyRadius - 5,
      this.y,
      this.wingSize,
      this.wingSize * 0.7,
      -0.5 + wingFlap,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.stroke();

    // Aile droite
    ctx.beginPath();
    ctx.ellipse(
      this.x + this.bodyRadius + 5,
      this.y,
      this.wingSize,
      this.wingSize * 0.7,
      0.5 - wingFlap,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.stroke();

    // Tête (petite et ronde)
    const headY = this.y - this.bodyRadius - this.headRadius + 5;

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(this.x, headY, this.headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Bec (petit et pointu - orange/rouge)
    ctx.fillStyle = '#ff6600';
    ctx.strokeStyle = '#cc4400';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(this.x, headY + 5);
    ctx.lineTo(this.x - 3, headY + 8);
    ctx.lineTo(this.x + 3, headY + 8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Crête (rouge sur la tête)
    ctx.fillStyle = '#ff0000';
    ctx.strokeStyle = '#cc0000';

    ctx.beginPath();
    ctx.moveTo(this.x - 4, headY - this.headRadius);
    ctx.lineTo(this.x - 2, headY - this.headRadius - 5);
    ctx.lineTo(this.x, headY - this.headRadius);
    ctx.lineTo(this.x + 2, headY - this.headRadius - 5);
    ctx.lineTo(this.x + 4, headY - this.headRadius);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Yeux (points faibles) - BIGLEUX avec grosses orbites
    this.weakPoints.forEach((wp, idx) => {
      const wpX = this.x + wp.x;
      const wpY = headY + wp.y;

      if(!wp.hit) {
        // Grande orbite blanche
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius + 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Pupille bigleuse (décalée différemment pour chaque œil)
        const wiggleX = idx === 0 ? Math.cos(this.eyeWiggleOffset) * 2 : Math.sin(this.eyeWiggleOffset * 1.3) * 2;
        const wiggleY = idx === 0 ? Math.sin(this.eyeWiggleOffset * 0.8) * 2 : Math.cos(this.eyeWiggleOffset * 1.1) * 2;
        
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(wpX + wiggleX, wpY + wiggleY, wp.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Point blanc (reflet fou)
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(wpX + wiggleX + 1.5, wpY + wiggleY - 1.5, 1.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Œil fermé (X)
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(wpX - 4, wpY - 4);
        ctx.lineTo(wpX + 4, wpY + 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(wpX + 4, wpY - 4);
        ctx.lineTo(wpX - 4, wpY + 4);
        ctx.stroke();
      }
    });

    // Pattes (oranges, fines)
    ctx.strokeStyle = '#ff6600';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    // Patte gauche
    ctx.beginPath();
    ctx.moveTo(this.x - 8, this.y + this.bodyRadius);
    ctx.lineTo(this.x - 10, this.y + this.bodyRadius + 15);
    ctx.stroke();

    // Patte droite
    ctx.beginPath();
    ctx.moveTo(this.x + 8, this.y + this.bodyRadius);
    ctx.lineTo(this.x + 10, this.y + this.bodyRadius + 15);
    ctx.stroke();

    ctx.restore();
  }

  drawEggs(ctx) {
    this.eggs.forEach(egg => {
      if(!egg.active) return;

      ctx.save();
      ctx.translate(egg.x, egg.y);
      ctx.rotate(egg.rotation);

      // Œuf (blanc avec taches brunes)
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#8b7355';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.ellipse(0, 0, 8, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Taches brunes
      ctx.fillStyle = '#8b7355';
      ctx.beginPath();
      ctx.arc(-2, -3, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(3, 2, 1.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });
  }
}

/**
 * Boss 4: 💀 Grim Reaper (La Faucheuse)
 * Philosophie chrétienne bienveillante sur la vie éternelle et la victoire sur la mort
 * Visuel: Crâne avec yeux noirs, mâchoire mobile, fait tomber des ossements et cercueils
 */
class GrimReaperBoss {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.x = x;
    this.y = y;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Statistiques
    this.maxHealth = 1200;
    this.health = this.maxHealth;
    this.isDead = false;

    // Dimensions
    this.skullWidth = 30;
    this.skullHeight = 35;
    this.jawOffset = 0; // Pour l'animation de la mâchoire
    this.jawOpenMax = 8;

    // Mouvement (flottement spectral)
    this.velocityX = 0.8;
    this.direction = 1;
    this.floatOffset = 0;
    this.baseY = y;

    // Attaques
    this.bones = []; // Ossements qui tombent
    this.coffins = []; // Cercueils qui tombent
    this.lastBoneAttack = 0;
    this.boneAttackCooldown = 1500; // 1.5 secondes
    this.lastCoffinAttack = 0;
    this.coffinAttackCooldown = 3000; // 3 secondes

    // Phases de combat avec messages philosophiques
    this.currentPhase = 1;
    this.phaseMessageShown = { 1: false, 2: false, 3: false };
    
    // Animation
    this.animationOffset = 0;

    // Points faibles (yeux noirs profonds)
    this.weakPoints = [
      { x: -8, y: -5, radius: 5, hit: false },
      { x: 8, y: -5, radius: 5, hit: false }
    ];
  }

  update(dt, playerX, playerY) {
    if(this.isDead) return;

    const dtFactor = dt / 16.67;

    // Mouvement horizontal spectral
    this.x += this.velocityX * this.direction * dtFactor;

    // Changer de direction aux bords
    if(this.x - this.skullWidth < 50) {
      this.x = 50 + this.skullWidth;
      this.direction *= -1;
      // Rire sinistre
      if (typeof playSound === 'function') {
        playSound('reaper_laugh');
      }
    }
    if(this.x + this.skullWidth > this.canvasWidth - 50) {
      this.x = this.canvasWidth - 50 - this.skullWidth;
      this.direction *= -1;
      // Rire sinistre
      if (typeof playSound === 'function') {
        playSound('reaper_laugh');
      }
    }

    // Flottement vertical (effet spectral)
    this.floatOffset += 0.05 * dtFactor;
    this.y = this.baseY + Math.sin(this.floatOffset) * 20;

    // Animation de la mâchoire (ouverture/fermeture)
    this.animationOffset += 0.15 * dtFactor;
    this.jawOffset = Math.abs(Math.sin(this.animationOffset)) * this.jawOpenMax;

    // Déterminer la phase selon la vie
    const healthPercent = this.getHealthPercentage();
    if(healthPercent <= 30 && this.currentPhase !== 3) {
      this.currentPhase = 3;
    } else if(healthPercent <= 60 && this.currentPhase !== 2) {
      this.currentPhase = 2;
    }

    // Attaques: Ossements
    if(Date.now() - this.lastBoneAttack > this.boneAttackCooldown) {
      this.dropBones();
      this.lastBoneAttack = Date.now();
    }

    // Attaques: Cercueils (plus rares)
    if(Date.now() - this.lastCoffinAttack > this.coffinAttackCooldown) {
      this.dropCoffin();
      this.lastCoffinAttack = Date.now();
    }

    // Mettre à jour les projectiles
    this.updateBones(dtFactor);
    this.updateCoffins(dtFactor);
  }

  dropBones() {
    // Son d'ossements qui tombent
    if (typeof playSound === 'function') {
      playSound('reaper_bone');
    }
    
    // Créer 2-4 ossements qui tombent
    const count = this.currentPhase === 3 ? 4 : (this.currentPhase === 2 ? 3 : 2);
    for(let i = 0; i < count; i++) {
      this.bones.push({
        x: this.x + (Math.random() - 0.5) * 80,
        y: this.y + this.skullHeight,
        velocityY: 2 + Math.random(),
        velocityX: (Math.random() - 0.5) * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        active: true
      });
    }
  }

  dropCoffin() {
    // Son de cercueil lourd
    if (typeof playSound === 'function') {
      playSound('reaper_coffin');
    }
    
    // Créer un cercueil qui tombe lentement
    this.coffins.push({
      x: this.x,
      y: this.y + this.skullHeight + 10,
      velocityY: 1.5,
      rotation: 0,
      rotationSpeed: 0.05,
      active: true
    });
  }

  updateBones(dtFactor) {
    this.bones.forEach(bone => {
      if(!bone.active) return;

      bone.y += bone.velocityY * dtFactor;
      bone.x += bone.velocityX * dtFactor;
      bone.rotation += bone.rotationSpeed * dtFactor;

      // Désactiver si hors écran
      if(bone.y > this.canvasHeight + 20) {
        bone.active = false;
      }
    });

    this.bones = this.bones.filter(b => b.active);
  }

  updateCoffins(dtFactor) {
    this.coffins.forEach(coffin => {
      if(!coffin.active) return;

      coffin.y += coffin.velocityY * dtFactor;
      coffin.rotation += coffin.rotationSpeed * dtFactor;

      // Désactiver si hors écran
      if(coffin.y > this.canvasHeight + 50) {
        coffin.active = false;
      }
    });

    this.coffins = this.coffins.filter(c => c.active);
  }

  takeDamage(damage, hitX, hitY) {
    if(this.isDead) return false;

    let isCritical = false;

    // Vérifier si c'est un coup critique (touche les yeux)
    this.weakPoints.forEach(wp => {
      if(!wp.hit) {
        const wpX = this.x + wp.x;
        const wpY = this.y + wp.y;
        const dist = Math.sqrt((hitX - wpX) ** 2 + (hitY - wpY) ** 2);

        if(dist < wp.radius + 5) {
          damage *= 2.5; // Triple dégâts sur les yeux (symbolise "ouvrir les yeux sur la vérité")
          wp.hit = true;
          isCritical = true;
        }
      }
    });

    this.health -= damage;

    if(this.health <= 0) {
      this.health = 0;
      this.isDead = true;
    }

    return isCritical;
  }

  getHealthPercentage() {
    return (this.health / this.maxHealth) * 100;
  }

  getCurrentPhaseMessage() {
    if(!this.phaseMessageShown[this.currentPhase]) {
      this.phaseMessageShown[this.currentPhase] = true;
      return this.currentPhase;
    }
    return null;
  }

  checkBoneCollision(playerX, playerY, playerW, playerH) {
    for(let bone of this.bones) {
      if(!bone.active) continue;

      if(playerX < bone.x + 10 &&
         playerX + playerW > bone.x - 10 &&
         playerY < bone.y + 6 &&
         playerY + playerH > bone.y - 6) {
        bone.active = false;
        return true;
      }
    }
    return false;
  }

  checkCoffinCollision(playerX, playerY, playerW, playerH) {
    for(let coffin of this.coffins) {
      if(!coffin.active) continue;

      if(playerX < coffin.x + 18 &&
         playerX + playerW > coffin.x - 18 &&
         playerY < coffin.y + 25 &&
         playerY + playerH > coffin.y - 25) {
        coffin.active = false;
        return true;
      }
    }
    return false;
  }

  draw(ctx) {
    if(this.isDead) return;

    ctx.save();

    // Dessiner les projectiles
    this.drawBones(ctx);
    this.drawCoffins(ctx);

    // Aura spectrale (effet fantomatique)
    ctx.shadowBlur = 30;
    ctx.shadowColor = 'rgba(100, 0, 150, 0.6)';

    // Crâne (partie supérieure - blanc osseux)
    ctx.fillStyle = '#f0e6d2';
    ctx.strokeStyle = '#8b7355';
    ctx.lineWidth = 2;

    // Forme du crâne (ovale aplati en haut)
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.skullWidth, this.skullHeight * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.shadowBlur = 0;

    // Yeux noirs profonds (cavités vides et effrayantes)
    this.weakPoints.forEach(wp => {
      const wpX = this.x + wp.x;
      const wpY = this.y + wp.y;

      if(!wp.hit) {
        // Cavité oculaire noire profonde
        ctx.fillStyle = '#000000';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#000000';
        ctx.beginPath();
        ctx.ellipse(wpX, wpY, wp.radius * 1.2, wp.radius * 1.4, 0, 0, Math.PI * 2);
        ctx.fill();

        // Lueur violette au fond (âme tourmentée)
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#8b00ff';
        ctx.fillStyle = '#8b00ff';
        ctx.beginPath();
        ctx.arc(wpX, wpY + 2, wp.radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Yeux touchés (lumière divine les remplit)
        ctx.fillStyle = '#ffd700';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ffd700';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    });

    // Cavité nasale (triangle inversé)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + 5);
    ctx.lineTo(this.x - 4, this.y + 12);
    ctx.lineTo(this.x + 4, this.y + 12);
    ctx.closePath();
    ctx.fill();

    // Mâchoire mobile (partie inférieure du crâne)
    ctx.save();
    ctx.translate(this.x, this.y + 15);

    // Décalage de la mâchoire (ouverture)
    ctx.translate(0, this.jawOffset);

    // Forme de la mâchoire
    ctx.fillStyle = '#e8dcc0';
    ctx.strokeStyle = '#8b7355';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(0, 0, this.skullWidth * 0.8, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Dents (blanches et pointues)
    ctx.fillStyle = '#ffffff';
    for(let i = -3; i <= 3; i++) {
      const toothX = i * 7;
      ctx.beginPath();
      ctx.moveTo(toothX - 2, -2);
      ctx.lineTo(toothX, -8);
      ctx.lineTo(toothX + 2, -2);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#999999';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    ctx.restore();

    // Fissures sur le crâne (marques du temps)
    ctx.strokeStyle = '#8b7355';
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(this.x - 10, this.y - 10);
    ctx.lineTo(this.x - 5, this.y - 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + 10, this.y - 10);
    ctx.lineTo(this.x + 5, this.y - 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - 15);
    ctx.lineTo(this.x + 2, this.y - 8);
    ctx.stroke();

    ctx.restore();
  }

  drawBones(ctx) {
    this.bones.forEach(bone => {
      if(!bone.active) return;

      ctx.save();
      ctx.translate(bone.x, bone.y);
      ctx.rotate(bone.rotation);

      // Ossement (forme simple - blanc cassé)
      ctx.fillStyle = '#e8dcc0';
      ctx.strokeStyle = '#8b7355';
      ctx.lineWidth = 1.5;

      // Corps de l'os
      ctx.beginPath();
      ctx.rect(-10, -3, 20, 6);
      ctx.fill();
      ctx.stroke();

      // Extrémités rondes
      ctx.beginPath();
      ctx.arc(-10, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(10, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    });
  }

  drawCoffins(ctx) {
    this.coffins.forEach(coffin => {
      if(!coffin.active) return;

      ctx.save();
      ctx.translate(coffin.x, coffin.y);
      ctx.rotate(coffin.rotation);

      // Cercueil (forme hexagonale - marron foncé)
      ctx.fillStyle = '#3d2817';
      ctx.strokeStyle = '#1a0f0a';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(0, -25);
      ctx.lineTo(12, -15);
      ctx.lineTo(12, 15);
      ctx.lineTo(0, 25);
      ctx.lineTo(-12, 15);
      ctx.lineTo(-12, -15);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Croix sur le cercueil (symbole de résurrection)
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#ffd700';

      // Vertical
      ctx.beginPath();
      ctx.moveTo(0, -12);
      ctx.lineTo(0, 12);
      ctx.stroke();

      // Horizontal
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(8, 0);
      ctx.stroke();

      ctx.shadowBlur = 0;

      ctx.restore();
    });
  }
}

/**
 * Boss 5: 🧱 La Muraille (The Wall)
 * Philosophie chrétienne sur les peurs qui enchaînent et la libération par la foi
 * Visuel: Long mur de briques avec des fissures, fait tomber des chaînes
 */
class WallBoss {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Position centrale (le mur occupe toute la largeur en haut)
    this.x = canvasWidth / 2;
    this.y = 100;
    this.width = canvasWidth * 0.8; // 80% de la largeur
    this.height = 40;

    // Statistiques
    this.maxHealth = 1500;
    this.health = this.maxHealth;
    this.isDead = false;

    // Structure du mur (segments de briques)
    this.bricks = [];
    this.initBricks();

    // Chaînes qui tombent
    this.chains = [];
    this.lastChainDrop = 0;
    this.chainDropCooldown = 1800; // 1.8 secondes

    // Fissures dans le mur (apparaissent quand endommagé)
    this.cracks = [];

    // Phases de combat avec messages philosophiques
    this.currentPhase = 1;
    this.phaseMessageShown = { 1: false, 2: false, 3: false };

    // Animation
    this.shakeOffset = 0;
    this.shakeIntensity = 0;

    // Points faibles (zones fragiles du mur - fissures clés)
    this.weakPoints = [
      { x: -this.width * 0.3, y: 0, radius: 12, hit: false, label: 'PEUR' },
      { x: 0, y: 0, radius: 12, hit: false, label: 'DOUTE' },
      { x: this.width * 0.3, y: 0, radius: 12, hit: false, label: 'HONTE' }
    ];
  }

  initBricks() {
    // Créer une grille de briques
    const brickWidth = 40;
    const brickHeight = 20;
    const rows = Math.ceil(this.height / brickHeight);
    const cols = Math.ceil(this.width / brickWidth);

    for(let row = 0; row < rows; row++) {
      for(let col = 0; col < cols; col++) {
        // Décalage en quinconce pour effet réaliste
        const offsetX = (row % 2) * (brickWidth / 2);
        this.bricks.push({
          x: col * brickWidth + offsetX - this.width / 2,
          y: row * brickHeight - this.height / 2,
          width: brickWidth - 2,
          height: brickHeight - 2,
          damaged: false
        });
      }
    }
  }

  update(dt, playerX, playerY) {
    if(this.isDead) return;

    const dtFactor = dt / 16.67;

    // Effet de tremblement quand endommagé
    if(this.shakeIntensity > 0) {
      this.shakeOffset = (Math.random() - 0.5) * this.shakeIntensity;
      this.shakeIntensity *= 0.95; // Diminue progressivement
    }

    // Déterminer la phase selon la vie
    const healthPercent = this.getHealthPercentage();
    if(healthPercent <= 30 && this.currentPhase !== 3) {
      this.currentPhase = 3;
      this.chainDropCooldown = 1200; // Plus rapide
    } else if(healthPercent <= 60 && this.currentPhase !== 2) {
      this.currentPhase = 2;
      this.chainDropCooldown = 1500;
    }

    // Faire tomber des chaînes
    if(Date.now() - this.lastChainDrop > this.chainDropCooldown) {
      this.dropChains();
      this.lastChainDrop = Date.now();
    }

    // Mettre à jour les chaînes
    this.updateChains(dtFactor);
  }

  dropChains() {
    // Son de chaînes qui tombent
    if (typeof playSound === 'function') {
      playSound('wall_chain');
    }
    
    // Créer 2-4 chaînes qui tombent depuis le mur
    const count = this.currentPhase === 3 ? 4 : (this.currentPhase === 2 ? 3 : 2);
    for(let i = 0; i < count; i++) {
      const xOffset = (Math.random() - 0.5) * this.width * 0.8;
      this.chains.push({
        x: this.x + xOffset,
        y: this.y + this.height / 2,
        velocityY: 2 + Math.random() * 0.5,
        length: 40 + Math.random() * 30, // Longueur variable
        swingOffset: Math.random() * Math.PI * 2,
        swingSpeed: 0.1 + Math.random() * 0.05,
        active: true
      });
    }
  }

  updateChains(dtFactor) {
    this.chains.forEach(chain => {
      if(!chain.active) return;

      chain.y += chain.velocityY * dtFactor;
      chain.swingOffset += chain.swingSpeed * dtFactor;

      // Désactiver si hors écran
      if(chain.y - chain.length > this.canvasHeight) {
        chain.active = false;
      }
    });

    this.chains = this.chains.filter(c => c.active);
  }

  takeDamage(damage, hitX, hitY) {
    if(this.isDead) return false;

    let isCritical = false;

    // Vérifier si c'est un coup critique (touche un point faible)
    this.weakPoints.forEach(wp => {
      if(!wp.hit) {
        const wpX = this.x + wp.x;
        const wpY = this.y + wp.y;
        const dist = Math.sqrt((hitX - wpX) ** 2 + (hitY - wpY) ** 2);

        if(dist < wp.radius + 5) {
          damage *= 3; // Triple dégâts (briser les chaînes de la peur)
          wp.hit = true;
          isCritical = true;

          // Ajouter une fissure majeure
          this.cracks.push({
            x: wp.x,
            y: wp.y,
            size: 20,
            type: 'major'
          });
        }
      }
    });

    // Ajouter fissure normale
    if(!isCritical && Math.random() < 0.3) {
      this.cracks.push({
        x: hitX - this.x,
        y: hitY - this.y,
        size: 8 + Math.random() * 8,
        type: 'normal'
      });
    }

    // Endommager des briques aléatoires
    if(Math.random() < 0.4) {
      const randomBrick = this.bricks[Math.floor(Math.random() * this.bricks.length)];
      if(randomBrick) {
        randomBrick.damaged = true;
        // Son de pierre qui se brise
        if (typeof playSound === 'function') {
          playSound('wall_break');
        }
      }
    }

    this.health -= damage;
    this.shakeIntensity = Math.min(8, this.shakeIntensity + 3); // Tremblement
    
    // Son de tremblement si dommages importants
    if (damage > 50 && typeof playSound === 'function') {
      playSound('wall_rumble');
    }

    if(this.health <= 0) {
      this.health = 0;
      this.isDead = true;
    }

    return isCritical;
  }

  getHealthPercentage() {
    return (this.health / this.maxHealth) * 100;
  }

  getCurrentPhaseMessage() {
    if(!this.phaseMessageShown[this.currentPhase]) {
      this.phaseMessageShown[this.currentPhase] = true;
      return this.currentPhase;
    }
    return null;
  }

  checkChainCollision(playerX, playerY, playerW, playerH) {
    for(let chain of this.chains) {
      if(!chain.active) continue;

      // Calculer le balancement
      const swingX = Math.sin(chain.swingOffset) * 15;

      // Vérifier collision avec chaque segment de la chaîne
      for(let i = 0; i < chain.length; i += 8) {
        const chainSegX = chain.x + swingX;
        const chainSegY = chain.y - chain.length + i;

        if(playerX < chainSegX + 4 &&
           playerX + playerW > chainSegX - 4 &&
           playerY < chainSegY + 4 &&
           playerY + playerH > chainSegY - 4) {
          chain.active = false;
          return true;
        }
      }
    }
    return false;
  }

  draw(ctx) {
    if(this.isDead) return;

    ctx.save();
    ctx.translate(this.x + this.shakeOffset, this.y);

    // Dessiner les chaînes en premier (derrière le mur)
    this.drawChains(ctx);

    // Dessiner les briques
    this.bricks.forEach(brick => {
      if(brick.damaged) {
        ctx.fillStyle = '#4a4a4a';
        ctx.strokeStyle = '#2a2a2a';
      } else {
        ctx.fillStyle = '#8b4513';
        ctx.strokeStyle = '#654321';
      }

      ctx.lineWidth = 1;
      ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
      ctx.strokeRect(brick.x, brick.y, brick.width, brick.height);

      // Texture de la brique (petites lignes)
      if(!brick.damaged) {
        ctx.strokeStyle = '#6d3611';
        ctx.lineWidth = 0.5;
        for(let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(brick.x + 5, brick.y + 5 + i * 5);
          ctx.lineTo(brick.x + brick.width - 5, brick.y + 5 + i * 5);
          ctx.stroke();
        }
      }
    });

    // Dessiner les fissures
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    this.cracks.forEach(crack => {
      const lines = crack.type === 'major' ? 5 : 3;
      for(let i = 0; i < lines; i++) {
        const angle = (Math.PI * 2 / lines) * i + Math.random() * 0.3;
        const length = crack.size * (0.5 + Math.random() * 0.5);
        ctx.beginPath();
        ctx.moveTo(crack.x, crack.y);
        ctx.lineTo(
          crack.x + Math.cos(angle) * length,
          crack.y + Math.sin(angle) * length
        );
        ctx.stroke();
      }
    });

    // Dessiner les points faibles (fissures clés avec labels)
    this.weakPoints.forEach(wp => {
      const wpX = wp.x;
      const wpY = wp.y;

      if(!wp.hit) {
        // Zone fragile (cercle rouge pulsant)
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ff0000';

        const pulse = Math.sin(Date.now() / 300) * 0.2 + 1;
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Label (mot de la peur)
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.font = 'bold 9px Arial';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.strokeText(wp.label, wpX, wpY - 18);
        ctx.fillText(wp.label, wpX, wpY - 18);
      } else {
        // Point détruit (lumière divine)
        ctx.fillStyle = '#ffd700';
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#ffd700';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Rayons de lumière
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 2;
        for(let i = 0; i < 8; i++) {
          const angle = (Math.PI * 2 / 8) * i;
          ctx.beginPath();
          ctx.moveTo(wpX, wpY);
          ctx.lineTo(
            wpX + Math.cos(angle) * 25,
            wpY + Math.sin(angle) * 25
          );
          ctx.stroke();
        }

        ctx.shadowBlur = 0;

        // Label barré (peur vaincue)
        ctx.fillStyle = '#00ff00';
        ctx.strokeStyle = '#000000';
        ctx.font = 'bold 9px Arial';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.strokeText('LIBÉRÉ', wpX, wpY - 18);
        ctx.fillText('LIBÉRÉ', wpX, wpY - 18);
      }
    });

    ctx.restore();
  }

  drawChains(ctx) {
    this.chains.forEach(chain => {
      if(!chain.active) return;

      ctx.save();

      // Balancement de la chaîne
      const swingX = Math.sin(chain.swingOffset) * 15;

      ctx.strokeStyle = '#4a4a4a';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';

      // Dessiner la chaîne segment par segment
      for(let i = 0; i < chain.length; i += 8) {
        const segY = chain.y - this.y - chain.length + i;
        const nextSegY = segY + 8;

        // Variation du balancement selon la position
        const swingVariation = swingX * (i / chain.length);

        ctx.beginPath();
        ctx.moveTo(swingVariation, segY);
        ctx.lineTo(swingVariation, nextSegY);
        ctx.stroke();

        // Maillon (ovale)
        ctx.strokeStyle = '#3a3a3a';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(swingVariation, segY + 4, 4, 6, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = '#4a4a4a';
        ctx.lineWidth = 3;
      }

      // Extrémité de la chaîne (poids/boule)
      const ballY = chain.y - this.y;
      ctx.fillStyle = '#2a2a2a';
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#000000';
      ctx.beginPath();
      ctx.arc(swingX, ballY, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.restore();
    });
  }
}

/**
 * Boss 6: ☁️ Le Nuage Sombre (The Dark Cloud)
 * Philosophie chrétienne sur les dépressions, peurs subites et pertes graves
 * Visuel: Gros nuage noir menaçant qui lâche des éclairs destructeurs
 */
class DarkCloudBoss {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.x = x;
    this.y = y;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Statistiques
    this.maxHealth = 1800;
    this.health = this.maxHealth;
    this.isDead = false;

    // Dimensions du nuage (forme irrégulière)
    this.width = 180;
    this.height = 80;
    this.cloudParts = []; // Parties du nuage pour effet organique
    this.initCloudParts();

    // Mouvement lent et menaçant
    this.velocityX = 0.5;
    this.direction = 1;
    this.floatOffset = 0;
    this.baseY = y;

    // Éclairs
    this.lightnings = [];
    this.lastLightningStrike = 0;
    this.lightningCooldown = 2000; // 2 secondes
    this.lightningFlash = 0; // Pour l'effet de flash

    // Pluie de ténèbres (petites gouttes noires)
    this.darkRaindrops = [];
    this.lastRainDrop = 0;
    this.rainDropCooldown = 2000; // OPTIMISATION: 2 secondes entre les vagues (avant: 300ms)

    // Phases de combat avec messages philosophiques
    this.currentPhase = 1;
    this.phaseMessageShown = { 1: false, 2: false, 3: false };

    // Animation
    this.pulseOffset = 0;
    this.stormIntensity = 0;

    // Points faibles (zones lumineuses dans le nuage - espoirs à protéger)
    this.weakPoints = [
      { x: -60, y: 0, radius: 10, hit: false, label: 'ESPOIR' },
      { x: 0, y: -10, radius: 10, hit: false, label: 'FOI' },
      { x: 60, y: 0, radius: 10, hit: false, label: 'AMOUR' }
    ];
  }

  initCloudParts() {
    // Créer des parties circulaires pour former un nuage organique
    const partCount = 12;
    for(let i = 0; i < partCount; i++) {
      const angle = (Math.PI * 2 / partCount) * i;
      const distance = 40 + Math.random() * 30;
      this.cloudParts.push({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance * 0.6, // Aplati verticalement
        radius: 25 + Math.random() * 20,
        opacity: 0.7 + Math.random() * 0.3,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }
  }

  update(dt, playerX, playerY) {
    if(this.isDead) return;

    const dtFactor = dt / 16.67;

    // Mouvement horizontal lent et oppressant
    this.x += this.velocityX * this.direction * dtFactor;

    // Changer de direction aux bords
    if(this.x - this.width / 2 < 50) {
      this.x = 50 + this.width / 2;
      this.direction *= -1;
    }
    if(this.x + this.width / 2 > this.canvasWidth - 50) {
      this.x = this.canvasWidth - 50 - this.width / 2;
      this.direction *= -1;
    }

    // Flottement vertical (lent et pesant)
    this.floatOffset += 0.03 * dtFactor;
    this.y = this.baseY + Math.sin(this.floatOffset) * 10;

    // Pulsation du nuage (respiration sombre)
    this.pulseOffset += 0.05 * dtFactor;

    // Déterminer la phase selon la vie
    const healthPercent = this.getHealthPercentage();
    if(healthPercent <= 30 && this.currentPhase !== 3) {
      this.currentPhase = 3;
      this.lightningCooldown = 1200; // Éclairs plus fréquents
      this.stormIntensity = 2;
    } else if(healthPercent <= 60 && this.currentPhase !== 2) {
      this.currentPhase = 2;
      this.lightningCooldown = 1600;
      this.stormIntensity = 1;
    }

    // Lancer des éclairs
    if(Date.now() - this.lastLightningStrike > this.lightningCooldown) {
      this.strikeLightning(playerX, playerY);
      this.lastLightningStrike = Date.now();
    }

    // Pluie de ténèbres
    if(Date.now() - this.lastRainDrop > this.rainDropCooldown) {
      this.dropDarkRain();
      this.lastRainDrop = Date.now();
    }

    // Mettre à jour les projectiles
    this.updateLightnings(dtFactor);
    this.updateDarkRain(dtFactor);

    // Diminuer le flash d'éclair
    if(this.lightningFlash > 0) {
      this.lightningFlash -= 0.05 * dtFactor;
    }
  }

  strikeLightning(playerX, playerY) {
    // Son de tonnerre d'orage
    if (typeof playSound === 'function') {
      playSound('thunder');
    }
    
    // Créer un éclair qui descend vers le sol
    const targetX = playerX + (Math.random() - 0.5) * 100; // Viser près du joueur
    const branchCount = 1 + Math.floor(Math.random() * 2); // 1-2 éclairs

    for(let i = 0; i < branchCount; i++) {
      const offsetX = (Math.random() - 0.5) * 60;
      this.lightnings.push({
        startX: this.x + offsetX,
        startY: this.y + this.height / 2,
        targetX: targetX + (Math.random() - 0.5) * 40,
        segments: this.generateLightningPath(
          this.x + offsetX,
          this.y + this.height / 2,
          targetX + (Math.random() - 0.5) * 40,
          this.canvasHeight - 50
        ),
        lifetime: 500, // 0.5 seconde
        createdAt: Date.now(),
        active: true
      });
    }

    this.lightningFlash = 1; // Flash blanc
  }

  generateLightningPath(startX, startY, endX, endY) {
    // Générer un chemin d'éclair avec segments irréguliers
    const segments = [];
    const segmentCount = 8 + Math.floor(Math.random() * 6);
    
    let currentX = startX;
    let currentY = startY;

    for(let i = 0; i < segmentCount; i++) {
      const progress = (i + 1) / segmentCount;
      const targetSegX = startX + (endX - startX) * progress;
      const targetSegY = startY + (endY - startY) * progress;
      
      // Ajouter variation aléatoire
      const offsetX = (Math.random() - 0.5) * 30;
      const nextX = targetSegX + offsetX;
      const nextY = targetSegY;

      segments.push({
        x1: currentX,
        y1: currentY,
        x2: nextX,
        y2: nextY
      });

      currentX = nextX;
      currentY = nextY;
    }

    return segments;
  }

  dropDarkRain() {
    // Créer 3-6 gouttes de pluie sombre
    const count = 3 + Math.floor(Math.random() * 4);
    for(let i = 0; i < count; i++) {
      const offsetX = (Math.random() - 0.5) * this.width;
      this.darkRaindrops.push({
        x: this.x + offsetX,
        y: this.y + this.height / 2,
        velocityY: 3 + Math.random() * 2,
        velocityX: (Math.random() - 0.5) * 0.5,
        size: 3 + Math.random() * 3,
        opacity: 0.6 + Math.random() * 0.4,
        active: true
      });
    }
  }

  updateLightnings(dtFactor) {
    const now = Date.now();
    this.lightnings.forEach(lightning => {
      if(!lightning.active) return;

      // Désactiver après lifetime
      if(now - lightning.createdAt > lightning.lifetime) {
        lightning.active = false;
      }
    });

    this.lightnings = this.lightnings.filter(l => l.active);
  }

  updateDarkRain(dtFactor) {
    this.darkRaindrops.forEach(drop => {
      if(!drop.active) return;

      drop.y += drop.velocityY * dtFactor;
      drop.x += drop.velocityX * dtFactor;

      // Désactiver si hors écran
      if(drop.y > this.canvasHeight) {
        drop.active = false;
      }
    });

    this.darkRaindrops = this.darkRaindrops.filter(d => d.active);
  }

  takeDamage(damage, hitX, hitY) {
    if(this.isDead) return false;

    let isCritical = false;

    // Vérifier si c'est un coup critique (touche un point faible)
    this.weakPoints.forEach(wp => {
      if(!wp.hit) {
        const wpX = this.x + wp.x;
        const wpY = this.y + wp.y;
        const dist = Math.sqrt((hitX - wpX) ** 2 + (hitY - wpY) ** 2);

        if(dist < wp.radius + 5) {
          damage *= 2.5; // Protéger l'espoir fait plus de dégâts
          wp.hit = true;
          isCritical = true;
        }
      }
    });

    this.health -= damage;

    if(this.health <= 0) {
      this.health = 0;
      this.isDead = true;
    }

    return isCritical;
  }

  getHealthPercentage() {
    return (this.health / this.maxHealth) * 100;
  }

  getCurrentPhaseMessage() {
    if(!this.phaseMessageShown[this.currentPhase]) {
      this.phaseMessageShown[this.currentPhase] = true;
      return this.currentPhase;
    }
    return null;
  }

  checkLightningCollision(playerX, playerY, playerW, playerH) {
    for(let lightning of this.lightnings) {
      if(!lightning.active) return false;

      // Vérifier collision avec chaque segment de l'éclair
      for(let segment of lightning.segments) {
        // Vérification simplifiée de collision avec ligne
        const dist = this.pointToLineDistance(
          playerX + playerW / 2,
          playerY + playerH / 2,
          segment.x1,
          segment.y1,
          segment.x2,
          segment.y2
        );

        if(dist < 15) { // Rayon de collision
          lightning.active = false;
          return true;
        }
      }
    }
    return false;
  }

  checkDarkRainCollision(playerX, playerY, playerW, playerH) {
    for(let drop of this.darkRaindrops) {
      if(!drop.active) continue;

      if(playerX < drop.x + drop.size &&
         playerX + playerW > drop.x - drop.size &&
         playerY < drop.y + drop.size * 2 &&
         playerY + playerH > drop.y) {
        drop.active = false;
        return true;
      }
    }
    return false;
  }

  pointToLineDistance(px, py, x1, y1, x2, y2) {
    // Distance d'un point à une ligne
    const A = px - x1;
    const B = py - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;

    if(lenSq !== 0) param = dot / lenSq;

    let xx, yy;

    if(param < 0) {
      xx = x1;
      yy = y1;
    } else if(param > 1) {
      xx = x2;
      yy = y2;
    } else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }

    const dx = px - xx;
    const dy = py - yy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  draw(ctx) {
    if(this.isDead) return;

    ctx.save();

    // Flash d'éclair (éclaircit l'écran)
    if(this.lightningFlash > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.lightningFlash * 0.3})`;
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    // Dessiner les éclairs
    this.drawLightnings(ctx);

    // Dessiner la pluie sombre
    this.drawDarkRain(ctx);

    // Dessiner le nuage (parties organiques)
    this.cloudParts.forEach((part, index) => {
      const pulse = Math.sin(this.pulseOffset + index * 0.5) * 0.15 + 1;
      const radius = part.radius * pulse;

      // Dégradé noir profond avec bordures violettes
      const gradient = ctx.createRadialGradient(
        this.x + part.x,
        this.y + part.y,
        0,
        this.x + part.x,
        this.y + part.y,
        radius
      );
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(0.6, '#0a0a1a');
      gradient.addColorStop(1, 'rgba(50, 0, 80, 0.3)');

      ctx.fillStyle = gradient;
      ctx.globalAlpha = part.opacity;
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#000000';

      ctx.beginPath();
      ctx.arc(this.x + part.x, this.y + part.y, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    });

    // Contour sombre du nuage principal
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#000000';
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.width / 2, this.height / 2, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Yeux menaçants (effet orage)
    ctx.fillStyle = '#ff4444';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#ff0000';

    const eyePulse = Math.sin(this.pulseOffset * 2) * 0.3 + 1;
    ctx.beginPath();
    ctx.ellipse(this.x - 30, this.y - 10, 8 * eyePulse, 12 * eyePulse, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(this.x + 30, this.y - 10, 8 * eyePulse, 12 * eyePulse, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;

    // Points faibles (zones de lumière - espoirs à protéger)
    this.weakPoints.forEach(wp => {
      const wpX = this.x + wp.x;
      const wpY = this.y + wp.y;

      if(!wp.hit) {
        // Zone lumineuse dorée (espoir qui brille dans les ténèbres)
        ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ffd700';

        const pulse = Math.sin(Date.now() / 400) * 0.3 + 1;
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.font = 'bold 9px Arial';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.strokeText(wp.label, wpX, wpY - 15);
        ctx.fillText(wp.label, wpX, wpY - 15);
      } else {
        // Point protégé (lumière éclatante)
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 30;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Rayons de victoire
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 3;
        for(let i = 0; i < 12; i++) {
          const angle = (Math.PI * 2 / 12) * i;
          ctx.beginPath();
          ctx.moveTo(wpX, wpY);
          ctx.lineTo(
            wpX + Math.cos(angle) * 30,
            wpY + Math.sin(angle) * 30
          );
          ctx.stroke();
        }

        ctx.shadowBlur = 0;

        // Label victorieux
        ctx.fillStyle = '#ffd700';
        ctx.strokeStyle = '#000000';
        ctx.font = 'bold 9px Arial';
        ctx.lineWidth = 2;
        ctx.textAlign = 'center';
        ctx.strokeText('PROTÉGÉ', wpX, wpY - 15);
        ctx.fillText('PROTÉGÉ', wpX, wpY - 15);
      }
    });

    ctx.restore();
  }

  drawLightnings(ctx) {
    this.lightnings.forEach(lightning => {
      if(!lightning.active) return;

      ctx.save();

      // Effet de glow pour l'éclair
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00ffff';
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';

      // Dessiner chaque segment
      lightning.segments.forEach(segment => {
        ctx.beginPath();
        ctx.moveTo(segment.x1, segment.y1);
        ctx.lineTo(segment.x2, segment.y2);
        ctx.stroke();
      });

      // Ligne interne blanche (cœur de l'éclair)
      ctx.shadowBlur = 5;
      ctx.shadowColor = '#ffffff';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;

      lightning.segments.forEach(segment => {
        ctx.beginPath();
        ctx.moveTo(segment.x1, segment.y1);
        ctx.lineTo(segment.x2, segment.y2);
        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      ctx.restore();
    });
  }

  drawDarkRain(ctx) {
    this.darkRaindrops.forEach(drop => {
      if(!drop.active) return;

      ctx.save();

      ctx.fillStyle = `rgba(20, 20, 40, ${drop.opacity})`;
      ctx.shadowBlur = 3;
      ctx.shadowColor = '#000000';

      // Goutte allongée
      ctx.beginPath();
      ctx.ellipse(drop.x, drop.y, drop.size / 2, drop.size * 1.5, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.restore();
    });
  }
}

/**
 * Boss 7: 🐦‍⬛ Le Corbeau Noir (The Black Raven)
 * Philosophie chrétienne sur les mensonges destructeurs concernant notre identité
 * Visuel: Grand corbeau noir avec yeux rouges, crache des plumes empoisonnées marquées de mensonges
 */
class BlackRavenBoss {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.x = x;
    this.y = y;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Statistiques
    this.maxHealth = 1400;
    this.health = this.maxHealth;
    this.isDead = false;

    // Dimensions
    this.bodyWidth = 35;
    this.bodyHeight = 40;
    this.wingSpan = 80;

    // Mouvement (vol erratique et menaçant)
    this.velocityX = 1.5;
    this.velocityY = 0.8;
    this.direction = 1;
    this.targetX = x;
    this.targetY = y;
    this.baseY = y;

    // Animation des ailes
    this.wingFlapOffset = 0;
    this.wingFlapSpeed = 0.25;

    // Plumes empoisonnées (marquées de mensonges)
    this.poisonFeathers = [];
    this.lastFeatherAttack = 0;
    this.featherAttackCooldown = 1500; // 1.5 secondes

    // Messages mensongers (cris du corbeau)
    this.lieMessages = [];
    this.lastLieShout = 0;
    this.lieShoutCooldown = 4000; // 4 secondes

    // Phases de combat avec messages philosophiques
    this.currentPhase = 1;
    this.phaseMessageShown = { 1: false, 2: false, 3: false };

    // Animation
    this.cawOffset = 0; // Pour l'animation du cri
    this.isAttacking = false;

    // Points faibles (yeux rouges mensongers)
    this.weakPoints = [
      { x: -8, y: -10, radius: 5, hit: false, label: 'VÉRITÉ' },
      { x: 8, y: -10, radius: 5, hit: false, label: 'VÉRITÉ' }
    ];

    // Liste de mensonges à afficher
    this.lies = [
      "PAS ASSEZ BEAU",
      "PAS ASSEZ RICHE",
      "PAS NORMAL",
      "MOINS QUE RIEN",
      "TROP DIFFÉRENT",
      "TROP PÉCHEUR",
      "TROP MAUVAIS",
      "INDIGNE",
      "RATÉ",
      "REJETÉ"
    ];
  }

  update(dt, playerX, playerY) {
    if(this.isDead) return;

    const dtFactor = dt / 16.67;

    // Mouvement erratique (vol de corbeau)
    if(Math.random() < 0.02) {
      this.targetX = 100 + Math.random() * (this.canvasWidth - 200);
      this.targetY = 60 + Math.random() * 80;
    }

    // Se déplacer vers la cible
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    this.x += dx * 0.02 * dtFactor;
    this.y += dy * 0.02 * dtFactor;

    // Garder dans les limites
    if(this.x < 50) this.x = 50;
    if(this.x > this.canvasWidth - 50) this.x = this.canvasWidth - 50;
    if(this.y < 50) this.y = 50;
    if(this.y > 150) this.y = 150;

    // Animation des ailes (battement)
    this.wingFlapOffset += this.wingFlapSpeed * dtFactor;
    
    // Son de battement d'ailes (toutes les 1 seconde environ)
    if (!this.lastFlapSound) this.lastFlapSound = 0;
    if (Date.now() - this.lastFlapSound > 1000) {
      if (typeof playSound === 'function') {
        playSound('raven_flap');
      }
      this.lastFlapSound = Date.now();
    }

    // Animation du cri
    this.cawOffset += 0.1 * dtFactor;

    // Déterminer la phase selon la vie
    const healthPercent = this.getHealthPercentage();
    if(healthPercent <= 30 && this.currentPhase !== 3) {
      this.currentPhase = 3;
      this.featherAttackCooldown = 1000; // Plus rapide
      this.lieShoutCooldown = 3000;
    } else if(healthPercent <= 60 && this.currentPhase !== 2) {
      this.currentPhase = 2;
      this.featherAttackCooldown = 1200;
    }

    // Attaquer avec des plumes empoisonnées
    if(Date.now() - this.lastFeatherAttack > this.featherAttackCooldown) {
      this.shootPoisonFeathers();
      this.lastFeatherAttack = Date.now();
    }

    // Crier des mensonges
    if(Date.now() - this.lastLieShout > this.lieShoutCooldown) {
      this.shoutLie();
      this.lastLieShout = Date.now();
    }

    // Mettre à jour les projectiles
    this.updateFeathers(dtFactor);
    this.updateLieMessages(dtFactor);
  }

  shootPoisonFeathers() {
    // Son de plumes lancées
    if (typeof playSound === 'function') {
      playSound('raven_feather');
    }
    
    // Créer 2-4 plumes empoisonnées
    const count = this.currentPhase === 3 ? 4 : (this.currentPhase === 2 ? 3 : 2);
    this.isAttacking = true;
    setTimeout(() => this.isAttacking = false, 300);

    for(let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 1.5;

      this.poisonFeathers.push({
        x: this.x,
        y: this.y,
        velocityX: Math.cos(angle) * speed,
        velocityY: Math.sin(angle) * speed + 1, // Toujours vers le bas
        rotation: angle,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        size: 12 + Math.random() * 6,
        lie: this.lies[Math.floor(Math.random() * this.lies.length)],
        active: true
      });
    }
  }

  shoutLie() {
    // Son de croassement sinistre
    if (typeof playSound === 'function') {
      playSound('raven_caw');
    }
    
    // Créer un message mensonger qui flotte
    const lie = this.lies[Math.floor(Math.random() * this.lies.length)];
    this.lieMessages.push({
      text: lie,
      x: this.x,
      y: this.y + 20,
      velocityY: 1.5,
      opacity: 1,
      lifetime: 3000, // 3 secondes
      createdAt: Date.now(),
      active: true
    });
  }

  updateFeathers(dtFactor) {
    this.poisonFeathers.forEach(feather => {
      if(!feather.active) return;

      feather.x += feather.velocityX * dtFactor;
      feather.y += feather.velocityY * dtFactor;
      feather.rotation += feather.rotationSpeed * dtFactor;

      // Désactiver si hors écran
      if(feather.y > this.canvasHeight || feather.x < 0 || feather.x > this.canvasWidth) {
        feather.active = false;
      }
    });

    this.poisonFeathers = this.poisonFeathers.filter(f => f.active);
  }

  updateLieMessages(dtFactor) {
    const now = Date.now();
    this.lieMessages.forEach(msg => {
      if(!msg.active) return;

      msg.y += msg.velocityY * dtFactor;
      
      // Fade out progressif
      const age = now - msg.createdAt;
      msg.opacity = 1 - (age / msg.lifetime);

      // Désactiver après lifetime
      if(age > msg.lifetime) {
        msg.active = false;
      }
    });

    this.lieMessages = this.lieMessages.filter(m => m.active);
  }

  takeDamage(damage, hitX, hitY) {
    if(this.isDead) return false;

    let isCritical = false;

    // Vérifier si c'est un coup critique (touche les yeux - VÉRITÉ contre mensonge)
    this.weakPoints.forEach(wp => {
      if(!wp.hit) {
        const wpX = this.x + wp.x;
        const wpY = this.y + wp.y;
        const dist = Math.sqrt((hitX - wpX) ** 2 + (hitY - wpY) ** 2);

        if(dist < wp.radius + 5) {
          damage *= 3; // Triple dégâts (la vérité détruit les mensonges)
          wp.hit = true;
          isCritical = true;
        }
      }
    });

    this.health -= damage;

    if(this.health <= 0) {
      this.health = 0;
      this.isDead = true;
    }

    return isCritical;
  }

  getHealthPercentage() {
    return (this.health / this.maxHealth) * 100;
  }

  getCurrentPhaseMessage() {
    if(!this.phaseMessageShown[this.currentPhase]) {
      this.phaseMessageShown[this.currentPhase] = true;
      return this.currentPhase;
    }
    return null;
  }

  checkFeatherCollision(playerX, playerY, playerW, playerH) {
    for(let feather of this.poisonFeathers) {
      if(!feather.active) continue;

      if(playerX < feather.x + feather.size &&
         playerX + playerW > feather.x - feather.size &&
         playerY < feather.y + feather.size &&
         playerY + playerH > feather.y - feather.size) {
        feather.active = false;
        return true;
      }
    }
    return false;
  }

  draw(ctx) {
    if(this.isDead) return;

    ctx.save();

    // Dessiner les messages mensongers flottants
    this.drawLieMessages(ctx);

    // Dessiner les plumes empoisonnées
    this.drawFeathers(ctx);

    // Corps du corbeau (noir profond)
    const bodyGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.bodyWidth);
    bodyGradient.addColorStop(0, '#1a1a1a');
    bodyGradient.addColorStop(1, '#000000');

    ctx.fillStyle = bodyGradient;
    ctx.strokeStyle = '#0a0a0a';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#000000';

    // Corps ovale
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.bodyWidth, this.bodyHeight, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.shadowBlur = 0;

    // Ailes (battement)
    const wingFlap = Math.sin(this.wingFlapOffset);
    const wingAngle = wingFlap * 0.6;

    // Aile gauche
    ctx.save();
    ctx.translate(this.x - 20, this.y);
    ctx.rotate(-0.5 + wingAngle);

    ctx.fillStyle = '#0a0a0a';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, 40, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Plumes de l'aile
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1.5;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(-10 + i * 5, -8);
      ctx.lineTo(-10 + i * 5, 8);
      ctx.stroke();
    }

    ctx.restore();

    // Aile droite
    ctx.save();
    ctx.translate(this.x + 20, this.y);
    ctx.rotate(0.5 - wingAngle);

    ctx.fillStyle = '#0a0a0a';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, 40, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Plumes de l'aile
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1.5;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(10 - i * 5, -8);
      ctx.lineTo(10 - i * 5, 8);
      ctx.stroke();
    }

    ctx.restore();

    // Tête (plus petite, noire)
    ctx.fillStyle = '#0a0a0a';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y - this.bodyHeight / 2 - 15, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Bec (jaune/orange, ouvert lors de l'attaque)
    const beakOpen = this.isAttacking ? 10 : 0;
    ctx.fillStyle = '#ff8800';
    ctx.strokeStyle = '#cc6600';
    ctx.lineWidth = 1.5;

    // Partie supérieure du bec
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.bodyHeight / 2 - 10);
    ctx.lineTo(this.x + 15, this.y - this.bodyHeight / 2 - 8 - beakOpen / 2);
    ctx.lineTo(this.x + 12, this.y - this.bodyHeight / 2 - 5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Partie inférieure du bec
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.bodyHeight / 2 - 10);
    ctx.lineTo(this.x + 15, this.y - this.bodyHeight / 2 - 8 + beakOpen / 2);
    ctx.lineTo(this.x + 12, this.y - this.bodyHeight / 2 - 5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Yeux rouges mensongers (points faibles)
    this.weakPoints.forEach(wp => {
      const wpX = this.x + wp.x;
      const wpY = this.y + wp.y;

      if(!wp.hit) {
        // Œil rouge maléfique
        ctx.fillStyle = '#ff0000';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ff0000';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius, 0, Math.PI * 2);
        ctx.fill();

        // Pupille noire
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Œil touché (lumière dorée - vérité révélée)
        ctx.fillStyle = '#ffd700';
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#ffd700';
        ctx.beginPath();
        ctx.arc(wpX, wpY, wp.radius * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Croix de lumière
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(wpX - 8, wpY);
        ctx.lineTo(wpX + 8, wpY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(wpX, wpY - 8);
        ctx.lineTo(wpX, wpY + 8);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
    });

    // Queue (plumes longues)
    ctx.save();
    ctx.translate(this.x, this.y + this.bodyHeight);
    const tailSway = Math.sin(this.wingFlapOffset * 0.5) * 0.2;
    ctx.rotate(tailSway);

    ctx.fillStyle = '#0a0a0a';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;

    for(let i = -2; i <= 2; i++) {
      const featherLength = 25 + Math.abs(i) * 5;
      ctx.beginPath();
      ctx.moveTo(i * 5, 0);
      ctx.lineTo(i * 8, featherLength);
      ctx.lineTo(i * 3, featherLength - 5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    ctx.restore();

    // Pattes (griffes noires)
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    // Patte gauche
    ctx.beginPath();
    ctx.moveTo(this.x - 8, this.y + this.bodyHeight - 10);
    ctx.lineTo(this.x - 12, this.y + this.bodyHeight + 8);
    ctx.stroke();

    // Patte droite
    ctx.beginPath();
    ctx.moveTo(this.x + 8, this.y + this.bodyHeight - 10);
    ctx.lineTo(this.x + 12, this.y + this.bodyHeight + 8);
    ctx.stroke();

    ctx.restore();
  }

  drawFeathers(ctx) {
    this.poisonFeathers.forEach(feather => {
      if(!feather.active) return;

      ctx.save();
      ctx.translate(feather.x, feather.y);
      ctx.rotate(feather.rotation);

      // Plume noire empoisonnée
      ctx.fillStyle = '#1a0a1a';
      ctx.strokeStyle = '#8b008b';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#8b008b';

      // Forme de plume
      ctx.beginPath();
      ctx.ellipse(0, 0, feather.size / 3, feather.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Ligne centrale
      ctx.strokeStyle = '#4a004a';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -feather.size);
      ctx.lineTo(0, feather.size);
      ctx.stroke();

      ctx.shadowBlur = 0;

      // Mensonge écrit sur la plume (petit)
      ctx.fillStyle = '#ff0000';
      ctx.font = 'bold 7px Arial';
      ctx.textAlign = 'center';
      ctx.shadowBlur = 5;
      ctx.shadowColor = '#ff0000';
      ctx.fillText(feather.lie, 0, 0);

      ctx.restore();
    });
  }

  drawLieMessages(ctx) {
    this.lieMessages.forEach(msg => {
      if(!msg.active) return;

      ctx.save();

      ctx.globalAlpha = msg.opacity;
      ctx.fillStyle = '#ff0000';
      ctx.strokeStyle = '#000000';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.lineWidth = 3;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ff0000';

      ctx.strokeText(msg.text, msg.x, msg.y);
      ctx.fillText(msg.text, msg.x, msg.y);

      ctx.restore();
    });
  }
}

/**
 * Gestionnaire de boss
 */
class BossManager {
  constructor() {
    this.currentBoss = null;
    this.bossActive = false;
    this.bossHealthBarVisible = false;
    this.bossType = null;
  }

  spawnBoss(bossType, canvasWidth, canvasHeight) {
    switch(bossType) {
      case 'spider':
        this.currentBoss = new SpiderBoss(canvasWidth / 2, 80, canvasWidth, canvasHeight);
        break;
      case 'flying_snake':
        this.currentBoss = new FlyingSnakeBoss(canvasWidth / 2, 80, canvasWidth, canvasHeight);
        break;
      case 'crazy_chicken':
        this.currentBoss = new CrazyChickenBoss(canvasWidth / 2, 80, canvasWidth, canvasHeight);
        break;
      case 'grim_reaper':
        this.currentBoss = new GrimReaperBoss(canvasWidth / 2, 80, canvasWidth, canvasHeight);
        break;
      case 'wall':
        this.currentBoss = new WallBoss(canvasWidth / 2, 80, canvasWidth, canvasHeight);
        break;
      case 'dark_cloud':
        this.currentBoss = new DarkCloudBoss(canvasWidth / 2, 80, canvasWidth, canvasHeight);
        break;
      case 'black_raven':
        this.currentBoss = new BlackRavenBoss(canvasWidth / 2, 80, canvasWidth, canvasHeight);
        break;
      default:
        console.warn('Boss type inconnu:', bossType);
        return;
    }

    this.bossActive = true;
    this.bossHealthBarVisible = true;
    this.bossType = bossType; // Stocker le type pour l'affichage
  }

  update(dt, playerX, playerY) {
    if(this.currentBoss && this.bossActive) {
      this.currentBoss.update(dt, playerX, playerY);

      if(this.currentBoss.isDead) {
        this.bossActive = false;
        this.bossHealthBarVisible = false;
      }
    }
  }

  draw(ctx) {
    if(this.currentBoss && this.bossActive) {
      this.currentBoss.draw(ctx);
    }
  }

  drawHealthBar(ctx, canvasWidth) {
    if(!this.bossHealthBarVisible || !this.currentBoss) return;

    ctx.save();

    // Calculer le pourcentage de vie
    const healthPercent = this.currentBoss.getHealthPercentage();

    // Position du trait (vertical, à gauche)
    const barX = 4;
    const barY = 140;
    const barWidth = 3;
    const barHeight = 120;

    // Couleur selon la vie - dégradé futuriste
    const healthColor = this.currentBoss.health > 500 ? '#00ffff' : // Cyan
                       this.currentBoss.health > 250 ? '#ff00ff' : // Magenta
                       '#ff0000'; // Rouge

    // Fond du trait (gris sombre transparent)
    ctx.fillStyle = 'rgba(40, 40, 40, 0.6)';
    ctx.fillRect(barX, barY, barWidth, barHeight);

    // Bordure extérieure fine
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(barX, barY, barWidth, barHeight);

    // Barre de vie (de bas en haut)
    const currentHeight = (healthPercent / 100) * barHeight;
    const healthBarY = barY + (barHeight - currentHeight);

    // Effet de glow néon
    ctx.shadowBlur = 15;
    ctx.shadowColor = healthColor;

    // Dégradé vertical pour effet futuriste
    const gradient = ctx.createLinearGradient(barX, healthBarY, barX, barY + barHeight);
    gradient.addColorStop(0, healthColor);
    gradient.addColorStop(0.5, healthColor + 'cc'); // Légèrement transparent au milieu
    gradient.addColorStop(1, healthColor + '88'); // Plus transparent en bas

    ctx.fillStyle = gradient;
    ctx.fillRect(barX, healthBarY, barWidth, currentHeight);

    // Ligne lumineuse au sommet de la barre (effet néon pulsant)
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(barX - 1, healthBarY - 1, barWidth + 2, 2);

    ctx.shadowBlur = 0;

    // Emoji du boss à gauche du trait (petit)
    const bossEmoji = this.bossType === 'spider' ? '🕷️' :
                      this.bossType === 'flying_snake' ? '🐍' :
                      this.bossType === 'crazy_chicken' ? '🐔' :
                      this.bossType === 'grim_reaper' ? '💀' :
                      this.bossType === 'wall' ? '🧱' :
                      this.bossType === 'dark_cloud' ? '☁️' :
                      this.bossType === 'black_raven' ? '🐦‍⬛' : '👹';
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    // Ombre pour l'emoji
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 4;
    ctx.fillText(bossEmoji, barX + 8, barY + barHeight / 2);
    ctx.shadowBlur = 0;

    // Pourcentage au-dessus du trait
    ctx.fillStyle = healthColor;
    ctx.font = 'bold 10px "Courier New"';
    ctx.textAlign = 'center';
    ctx.shadowColor = healthColor;
    ctx.shadowBlur = 8;
    ctx.fillText(Math.ceil(healthPercent) + '%', barX + barWidth / 2, barY - 8);

    ctx.restore();
  }

  checkBulletCollision(bulletX, bulletY, bulletW, bulletH, damage = 10) {
    if(!this.currentBoss || !this.bossActive || this.currentBoss.isDead) {
      return false;
    }

    let hit = false;

    // Gérer différemment selon le type de boss
    if(this.bossType === 'spider') {
      // Vérifier collision avec le corps ou la tête de l'araignée
      const hitBody = Math.sqrt((bulletX - this.currentBoss.x) ** 2 +
                                (bulletY - this.currentBoss.y) ** 2) < this.currentBoss.bodyRadius;
      const hitHead = Math.sqrt((bulletX - this.currentBoss.x) ** 2 +
                                (bulletY - (this.currentBoss.y - this.currentBoss.headRadius)) ** 2) < this.currentBoss.headRadius;

      hit = hitBody || hitHead;
    } else if(this.bossType === 'snake') {
      // Vérifier collision avec n'importe quel segment du serpent
      for(let segment of this.currentBoss.segments) {
        const radius = segment === this.currentBoss.segments[0] ? this.currentBoss.headRadius : this.currentBoss.segmentRadius;
        const dist = Math.sqrt((bulletX - segment.x) ** 2 + (bulletY - segment.y) ** 2);

        if(dist < radius) {
          hit = true;
          break;
        }
      }
    } else if(this.bossType === 'chicken') {
      // Vérifier collision avec le corps de la poule
      const hitBody = Math.sqrt((bulletX - this.currentBoss.x) ** 2 +
                                (bulletY - this.currentBoss.y) ** 2) < this.currentBoss.bodyRadius;
      hit = hitBody;
    } else if(this.bossType === 'grim_reaper') {
      // Vérifier collision avec le crâne du Grim Reaper
      const hitSkull = Math.sqrt((bulletX - this.currentBoss.x) ** 2 +
                                 (bulletY - this.currentBoss.y) ** 2) < this.currentBoss.skullWidth;
      hit = hitSkull;
    } else if(this.bossType === 'wall') {
      // Vérifier collision avec n'importe quelle partie du mur
      if(bulletX > this.currentBoss.x - this.currentBoss.width / 2 &&
         bulletX < this.currentBoss.x + this.currentBoss.width / 2 &&
         bulletY > this.currentBoss.y - this.currentBoss.height / 2 &&
         bulletY < this.currentBoss.y + this.currentBoss.height / 2) {
        hit = true;
      }
    } else if(this.bossType === 'dark_cloud') {
      // Vérifier collision avec le nuage
      const dist = Math.sqrt((bulletX - this.currentBoss.x) ** 2 +
                             (bulletY - this.currentBoss.y) ** 2);
      if(dist < this.currentBoss.width / 2) {
        hit = true;
      }
    } else if(this.bossType === 'black_raven') {
      // Vérifier collision avec le corps du corbeau
      const hitBody = Math.sqrt((bulletX - this.currentBoss.x) ** 2 +
                                (bulletY - this.currentBoss.y) ** 2) < this.currentBoss.bodyWidth;
      hit = hitBody;
    }

    if(hit) {
      const isCritical = this.currentBoss.takeDamage(damage, bulletX, bulletY);
      return { hit: true, critical: isCritical };
    }

    return { hit: false, critical: false };
  }

  checkPlayerCollision(playerX, playerY, playerW, playerH) {
    if(!this.currentBoss || !this.bossActive || this.currentBoss.isDead) {
      return false;
    }

    // Vérifier collision selon le type de boss
    if(this.bossType === 'spider') {
      // Vérifier collision avec les lignes de toile
      return this.currentBoss.checkWebCollision(playerX, playerY, playerW, playerH);
    } else if(this.bossType === 'snake') {
      // Vérifier collision avec les petites couleuvres
      return this.currentBoss.checkSnakletCollision(playerX, playerY, playerW, playerH);
    } else if(this.bossType === 'chicken') {
      // Vérifier collision avec les œufs
      return this.currentBoss.checkEggCollision(playerX, playerY, playerW, playerH);
    } else if(this.bossType === 'grim_reaper') {
      // Vérifier collision avec les ossements et cercueils
      return this.currentBoss.checkBoneCollision(playerX, playerY, playerW, playerH) ||
             this.currentBoss.checkCoffinCollision(playerX, playerY, playerW, playerH);
    } else if(this.bossType === 'wall') {
      // Vérifier collision avec les chaînes
      return this.currentBoss.checkChainCollision(playerX, playerY, playerW, playerH);
    } else if(this.bossType === 'dark_cloud') {
      // Vérifier collision avec les éclairs et la pluie sombre
      return this.currentBoss.checkLightningCollision(playerX, playerY, playerW, playerH) ||
             this.currentBoss.checkDarkRainCollision(playerX, playerY, playerW, playerH);
    } else if(this.bossType === 'black_raven') {
      // Vérifier collision avec les plumes empoisonnées
      return this.currentBoss.checkFeatherCollision(playerX, playerY, playerW, playerH);
    }

    return false;
  }

  getBossRewards() {
    if(!this.currentBoss || !this.currentBoss.isDead) return null;

    return {
      score: 5000,
      powerUps: [
        { type: 'heart', count: 2 },
        { type: 'rainbow', count: 1 },
        { type: 'star', count: 3 }
      ]
    };
  }

  isBossActive() {
    return this.bossActive;
  }

  isBossDefeated() {
    return this.currentBoss && this.currentBoss.isDead;
  }

  reset() {
    this.currentBoss = null;
    this.bossActive = false;
    this.bossHealthBarVisible = false;
    this.bossType = null;
  }
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SpiderBoss,
    FlyingSnakeBoss,
    CrazyChickenBoss,
    GrimReaperBoss,
    WallBoss,
    DarkCloudBoss,
    BlackRavenBoss,
    BossManager
  };
}
